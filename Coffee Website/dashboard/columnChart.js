// Get computed styles to access CSS variables
const rootStyles = getComputedStyle(document.documentElement);

// Data for the chart (modified with CSS variables)
const salesData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [{
        label: 'Sales Products',
        data: [12, 30, 18, 47, 10],
        borderColor: rootStyles.getPropertyValue('--main-color'), // Use black for bar borders
        borderWidth: 2
    }]
};

// Configuration options for the chart
const config = {
    type: 'bar',
    data: salesData,
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
                text: 'Sales Products',
                color: rootStyles.getPropertyValue('--main-color') // Use white for title text color
                
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Sales',
                    color: rootStyles.getPropertyValue('--main-color') // Use white for Y-axis label color
                },
                grid: {
                    color: rootStyles.getPropertyValue('--main-color') // Use black for gridlines
                },
                ticks: {
                    color: rootStyles.getPropertyValue('--main-color') // Use white for tick marks
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Product',
                    color: rootStyles.getPropertyValue('--main-color') // Use white for X-axis label color
                },
                grid: {
                    display: false // Disable gridlines on X-axis
                },
                ticks: {
                    color: rootStyles.getPropertyValue('--main-color') // Use white for tick marks
                }
            }
        }
    }
};

// Render the chart
window.onload = () => {
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, config);
};
