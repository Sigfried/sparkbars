import React from 'react';
import { render } from 'react-dom';
import SparkBars from './SparkBars.js';

render(
  <div>
    <SparkBars
        things={[3,5,2,2,7,9,5,3]}
        //valFunc={d=>d.records.length}
        //sortBy={d=>-d.records.length}
        //passthrough={dim}
        //barNums={barNums}
        width={200}
        height={40} 
        //highlight={this.highlight.bind(this)}
        //endHighlight={this.endHighlight.bind(this)}
        //isHighlighted={this.isHighlighted.bind(this)}
    />
  </div>,
  document.getElementById('example')
);
