// Get computed styles to access CSS variables
const rootStyles = getComputedStyle(document.documentElement);

// Data for the chart (modified with CSS variables)
const visitorData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Monthly Visitors',
        data: [5, 17, 28, 20, 220, 150, 180, 36, 320, 30, 370, 400],
        fill: false,
        borderColor: rootStyles.getPropertyValue('--main-color'), // Use black for the line color
        borderWidth: 2,
        pointBackgroundColor: rootStyles.getPropertyValue('--main-color'), // Use black for data points
        pointBorderColor: rootStyles.getPropertyValue('--main-color'), // Use background color for data point borders
        pointBorderWidth: 2,
    }]
};

// Configuration options for the chart
const config = {
    type: 'line',
    data: visitorData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: {
                        color: rootStyles.getPropertyValue('--main-color') // Use white for legend text color
                    }
                }
            },
            title: {
                display: true,
                text: 'Monthly Website Visitors',
                color: rootStyles.getPropertyValue('--main-color') // Use for gridlines
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Visitors',
                    color: rootStyles.getPropertyValue('--main-color') // Use for gridlines
                },
                grid: {
                    color: rootStyles.getPropertyValue('--main-color') // Use for gridlines
                },
                ticks: {
                    color: rootStyles.getPropertyValue('--main-color') // Use for tick marks
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Month',
                    color: rootStyles.getPropertyValue('--main-color') // Use for gridlines
                },
                grid: {
                    color: rootStyles.getPropertyValue('--main-color') // Use for gridlines
                },
                ticks: {
                    color: rootStyles.getPropertyValue('--main-color') // Use for tick marks
                }
            }
        }
    }
};

// Render the chart
window.onload = () => {
    const ctx = document.getElementById('visitorsChart').getContext('2d');
    new Chart(ctx, config);
};
