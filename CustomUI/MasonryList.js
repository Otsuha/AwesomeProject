import * as React from 'react';
import {findNodeHandle, RefreshControl, ScrollView, View, VirtualizedList} from 'react-native';

type Column = {
  index: number,
  totalHeight: number,
  data: Array<any>,
  heights: Array<number>,
};

const _stateFromProps = ({numColumns, data, getHeightForItem}) => {
  const columns: Array<Column> = Array.from({length: numColumns}).map(
    (col, i) => ({
      index: i,
      totalHeight: 0,
      data: [],
      heights: [],
    }),
  );

  data.forEach((item, index) => {
    const height = getHeightForItem({item, index});
    const column = columns.reduce(
      (prev, cur) => (cur.totalHeight > prev.totalHeight ? cur : prev),
      columns[0],
    );
    column.data.push(item);
    column.heights.push(height);
    column.totalHeight += height;
  });

  return {columns};
};

export type Props = {
  data: Array<any>,
  numColumns: number,
  renderItem: (
    item: any,
    index: number,
    column: number,
  ) => ?React.ReactElement<any>,
  getHeightForItem: ({item: any, index: number}) => number,
  ListHeaderComponent?: ?React.ComponentType<any>,
  ListEmptyComponent?: ?React.ComponentType<any>,
  KeyExtractor?: (item: any, index: number) => string,
  onEndReached?: ?(info: {distanceFromEnd: number}) => void,
  contentContainerStyle?: any,
  onScroll?: (event: Object) => void,
  onScrollBeginDrag?: (event: Object) => void,
  onScrollEndDrag?: (event: Object) => void,
  onMomentumScrollEnd?: (event: Object) => void,
  onEndReachedThreshold?: ?number,
  scrollEventThreshold?: ?number,
  renderScrollComponent: (props: Object) => React.ReactElement<any>,
  refreshing?: ?boolean,
  onRefresh?: ?Function,
};

type State = {
  columns: Array<Column>,
};

const FakeScrollView = props => {
  return <View style={props.style}>{props.children}</View>;
};

export default class MasonryList extends React.Component<Props, State> {
  static defaultProps = {
    scrollEventThrottle: 50,
    numColumns: 1,
    renderScrollComponent: (props: Props) => {
      if (props.onRefresh && props.refreshing != null) {
        return (
          <ScrollView
            {...props}
            refreshControl={
              <RefreshControl
                refreshing={props.refreshing}
                onRefresh={props.onRefresh}
              />
            }
          />
        );
      }
      return <ScrollView {...props} />;
    },
  };
  state = _stateFromProps(this.props);
  _listRefs: Array<?VirtualizedList> = [];
  _scrollRef: ?ScrollView;
  _endsReached = 0;

  componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any) {
    this.setState(nextProps);
  }

  getScrollResponder() {
    if (this._scrollRef && this._scrollRef.getScrollResponder) {
      return this._scrollRef.getScrollResponder();
    }
    return null;
  }

  getScrollableNode() {
    if (this._scrollRef && this._scrollRef.getInnerViewNode) {
      return this._scrollRef.getScrollableNode();
    }
    return findNodeHandle(this._scrollRef);
  }

  scrollToOffset({offset, animated}: any) {
    if (this._scrollRef) {
      this._scrollRef.scrollTo({y: offset, animated});
    }
  }

  _onLayout = event => {
    this._listRefs.forEach(
      list => list && list._onLayout && list._onLayout(event),
    );
  };

  _onContentSize
}
