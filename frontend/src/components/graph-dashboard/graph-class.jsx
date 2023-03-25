import React, { Component } from 'react';
import Chart from 'chart.js';

class MyChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const { data } = this.props;

    const myChartRef = this.chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: data.values,
            borderColor: 'red',
          },
        ],
      },
      options: {},
    });
  }

  render() {
    return <canvas id="myChart" ref={this.chartRef} />;
  }
}

export default MyChart;