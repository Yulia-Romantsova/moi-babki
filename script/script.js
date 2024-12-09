const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
      datasets: [
        {
        label: 'Зачисления',
        data: [10,4,3,15,0,7,8.5],
        stack: 'stack 0',
        backgroundColor: [
            '#1814F3',
          ],         
          borderRadius: 20,
          borderSkipped: false,
      },
      {
        label: 'Списания',
        data: [3,5,1.5,6,11,2,9],
        stack: 'stack 1',
        backgroundColor: [
            '#16DBCC',
          ],
          borderRadius: 25,
          borderSkipped: false,
      }
    ]
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: 13
    },
    responsive: true,
         plugins: {
        legend: {
          align: 'end',
          labels: {
              color: '#718EBF',
              fontSize: 40,
          }
      }
    },
      scales: {
        y: {
          beginAtZero: true,
          stacked: true,
          grid: {
            display: true,
            
          },
          ticks: {
            color: '#718EBF',
            fontSize: 50
        },          
        },
        x:{
          grid: {
            display: false
          },
          ticks: {
            color: '#718EBF',
            fontSize: 50
        },
      },
      },
    }
  });

const donutChartCtx = document.getElementById('donutChart');
Chart.defaults.color = '#FFFFFF';
Chart.defaults.font.size = 18;
new Chart(donutChartCtx, {
  type: 'pie',
  data: {  
    labels: ['Развлечения', 'Оплата счетов', 'Инвестиции', 'Другое'],
    datasets: [{      
      data: [25, 20, 45, 10],
      backgroundColor: [
        '#1814F3',
        '#343C6A',
        '#FA00FF',
        '#FC7900'
      ],
      hoverOffset: 40
    }]
  },
  options: {
    layout: {
      padding: 13
  },
    maintainAspectRatio: false,   
    plugins: {  
      tooltip: {
        callbacks: {
          title: (items) => `${items[0].label}:`,
          label: (items) => ` ${items.formattedValue}%`,
        }
      },    
      legend: {
        display: true,        
        position: 'center',
      },       
      datalabels: {        
        formatter: (value, context) => {
          const datapoints = context.chart.data.datasets[0].data;
          function totalSum (total, datapoint) {
            return total + datapoint;
          }    
          const totalvalue = datapoints.reduce(totalSum, 0);   
          const percentagelValue = value / totalvalue * 100;
          const display = [`${percentagelValue} %`,]          
          return display;
        }
      },
      
    }   
},
plugins: [ChartDataLabels],  
})


const lineChartCtx = document.getElementById('lineChart');
new Chart(lineChartCtx, {
  type: 'line',
  data: {
    labels: ['Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек', 'Янв'],
    datasets: [{
      pointRadius: 0,      
    data: [6500, 5900, 11300, 8100, 5600, 9500, 4000, 1100, 5200],
    fill: true,
    backgroundColor: (context) => {
      const bgColor = [
        'rgba(24, 20, 243, 1)',
        'rgba(255, 255, 255, 1)',
      ];
      if (!context.chart.chartArea) {
        return;
      }
      const {ctx, data, chartArea: {top, bottom} } = context.chart;
      const gradientBg = ctx.createLinearGradient (0,top, 0, bottom);
      gradientBg.addColorStop (0, bgColor[0])
      gradientBg.addColorStop (1, bgColor[1])
      return gradientBg;
    },
    borderColor: 'rgba(24, 20, 243, 1)',
    tension: 0.5,    
    }]
  },
  
    options: {
      maintainAspectRatio: false,      
      responsive: true,
      layout: {
        padding: 13
    },
      plugins: {
        colors: {
          enabled: false
        },
        legend: {
          display: false
        }
      },
      scales: {
        x:{
          ticks: {
            color: '#718EBF',
            fontSize: 40
        },
      },
        y:{
          ticks:{
            color: '#718EBF',
          }
        }
    }
  }
  })
  
  