import React, { Component } from 'react';
import {ItemTypes} from './constants';
import {DragSource} from 'react-dnd';

const knightSource = {
  beginDrag(props) {
    return {};
  }
}

// this puts them on the props
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: isDragging ? 42 : 36,
        textAlign: 'center',
        fontWeight: 'bold',
        display: 'block',
        cursor: 'move'
      }}>♘</span>
    );
  }
}

Knight.propTypes = {
  connectDragSource: React.PropTypes.func.isRequired,
  isDragging: React.PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);