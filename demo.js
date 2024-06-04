 document.getElementById('solar-form').addEventListener('submit', function (event) {
            event.preventDefault();

            // Get user input values
            const solarCapacity = parseFloat(document.getElementById('solarCapacity').value);
            const noOfDays = parseFloat(document.getElementById('noOfDays').value);
            const temperatureCoefficient = parseFloat(document.getElementById('temperatureCoefficient').value) / 100;
            const shadowLossPercentage = parseFloat(document.getElementById('shadowLossPercentage').value) / 100;
            const place = document.getElementById('place').value;
            const startTime = new Date(document.getElementById('startTime').value);
            const endTime = new Date(document.getElementById('endTime').value);
            const noOfYears = parseFloat(document.getElementById('noOfYears').value);

            // Temperature data
            const temperatureData = [
                { Year: 2017, Month: 1, Average: 25.025 }, { Year: 2017, Month: 2, Average: 27.325 }, { Year: 2017, Month: 3, Average: 27.9 }, { Year: 2017, Month: 4, Average: 28.425 }, { Year: 2017, Month: 5, Average: 30.1 }, { Year: 2017, Month: 6, Average: 28.8 }, { Year: 2017, Month: 7, Average: 27.975 }, { Year: 2017, Month: 8, Average: 27.325 }, { Year: 2017, Month: 9, Average: 29 }, { Year: 2017, Month: 10, Average: 29.45 }, { Year: 2017, Month: 11, Average: 27.825 }, { Year: 2017, Month: 12, Average: 25.825 },
                { Year: 2018, Month: 1, Average: 25.375 }, { Year: 2018, Month: 2, Average: 27.275 }, { Year: 2018, Month: 3, Average: 30 }, { Year: 2018, Month: 4, Average: 29.275 }, { Year: 2018, Month: 5, Average: 29.775 }, { Year: 2018, Month: 6, Average: 28.9 }, { Year: 2018, Month: 7, Average: 27.425 }, { Year: 2018, Month: 8, Average: 27.025 }, { Year: 2018, Month: 9, Average: 27.65 }, { Year: 2018, Month: 10, Average: 29.15 }, { Year: 2018, Month: 11, Average: 28.9 }, { Year: 2018, Month: 12, Average: 25.4 },
                { Year: 2019, Month: 1, Average: 24.3 }, { Year: 2019, Month: 2, Average: 24.225 }, { Year: 2019, Month: 3, Average: 28.075 }, { Year: 2019, Month: 4, Average: 28.7 }, { Year: 2019, Month: 5, Average: 30 }, { Year: 2019, Month: 6, Average: 29.225 }, { Year: 2019, Month: 7, Average: 28.75 }, { Year: 2019, Month: 8, Average: 28.125 }, { Year: 2019, Month: 9, Average: 27.175 }, { Year: 2019, Month: 10, Average: 29.5 }, { Year: 2019, Month: 11, Average: 28.275 }, { Year: 2019, Month: 12, Average: 26.375 },
                { Year: 2020, Month: 1, Average: 23.55 }, { Year: 2020, Month: 2, Average: 26.15 }, { Year: 2020, Month: 3, Average: 27.325 }, { Year: 2020, Month: 4, Average: 29.575 }, { Year: 2020, Month: 5, Average: 30.625 }, { Year: 2020, Month: 6, Average: 28.875 }, { Year: 2020, Month: 7, Average: 28.2 }, { Year: 2020, Month: 8, Average: 28.05 }, { Year: 2020, Month: 9, Average: 28.775 }, { Year: 2020, Month: 10, Average: 28.65 }, { Year: 2020, Month: 11, Average: 28.1 }, { Year: 2020, Month: 12, Average: 25.95 },
                { Year: 2021, Month: 1, Average: 25.1 }, { Year: 2021, Month: 2, Average: 26.85 }, { Year: 2021, Month: 3, Average: 29.9 }, { Year: 2021, Month: 4, Average: 29.35 }, { Year: 2021, Month: 5, Average: 30.4 }, { Year: 2021, Month: 6, Average: 28.725 }, { Year: 2021, Month: 7, Average: 28.5 }, { Year: 2021, Month: 8, Average: 27.95 }, { Year: 2021, Month: 9, Average: 28.225 }, { Year: 2021, Month: 10, Average: 28.4 }, { Year: 2021, Month: 11, Average: 29.675 }, { Year: 2021, Month: 12, Average: 26.25 },
                { Year: 2022, Month: 1, Average: 24.3 }, { Year: 2022, Month: 2, Average: 24.25 }, { Year: 2022, Month: 3, Average: 26.75 }, { Year: 2022, Month: 4, Average: 29.25 }, { Year: 2022, Month: 5, Average: 30.3 }, { Year: 2022, Month: 6, Average: 29.7 }, { Year: 2022, Month: 7, Average: 27.5 }, { Year: 2022, Month: 8, Average: 27.6 }, { Year: 2022, Month: 9, Average: 27.5 }, { Year: 2022, Month: 10, Average: 28.25 }, { Year: 2022, Month: 11, Average: 27.75 }, { Year: 2022, Month: 12, Average: 26.25 },
                { Year: 2023, Month: 1, Average: 24.25 }, { Year: 2023, Month: 2, Average: 26.7 }, { Year: 2023, Month: 3, Average: 25 }, { Year: 2023, Month: 4, Average: 29.025 }, { Year: 2023, Month: 5, Average: 29.875 }, { Year: 2023, Month: 6, Average: 29.55 }, { Year: 2023, Month: 7, Average: 27.5 }, { Year: 2023, Month: 8, Average: 27.925 }, { Year: 2023, Month: 9, Average: 27.65 }, { Year: 2023, Month: 10, Average: 26.975 }, { Year: 2023, Month: 11, Average: 27.75 }, { Year: 2023, Month: 12, Average: 26.25 },
                { Year: 2024, Month: 1, Average: 24.25 }, { Year: 2024, Month: 2, Average: 24.75 }, { Year: 2024, Month: 3, Average: 26.75 }, { Year: 2024, Month: 4, Average: 28.5 }
            ];

            // Filter temperature data based on the selected time range
            const startYear = startTime.getFullYear();
            const startMonth = startTime.getMonth() + 1;
            const endYear = endTime.getFullYear();
            const endMonth = endTime.getMonth() + 1;

            const filteredTemperatureData = temperatureData.filter(item =>
                (item.Year > startYear || (item.Year === startYear && item.Month >= startMonth)) &&
                (item.Year < endYear || (item.Year === endYear && item.Month <= endMonth))
            );

            // Calculate average temperature
            let averageTemperature;
            if (filteredTemperatureData.length > 0) {
                averageTemperature = filteredTemperatureData.reduce((acc, curr) => acc + curr.Average, 0) / filteredTemperatureData.length;
            } else {
                averageTemperature = parseFloat(prompt("Enter daily temperature (in degree Celsius):"));
            }

            // Constants
            const NOCT = 45;
            const fixedDeratingFactor = 0.83;

            // Calculate cell coefficient
            const cellCoefficient = averageTemperature + NOCT - 20;

            // Calculate temperature derating factor
            const temperatureDeratingFactor = 1 - (temperatureCoefficient * (cellCoefficient - 25));

            // Calculate shadow derating factor
            const shadowDeratingFactor = 1 - shadowLossPercentage;

            // Calculate degradation factor based on the number of years
            let degradationFactor;
            if (noOfYears <= 1) {
                degradationFactor = 1;
            } else if (noOfYears <= 2) {
                degradationFactor = 1 - (0.03 * (noOfYears - 1));
            } else {
                degradationFactor = 1 - (0.0065 * (noOfYears - 2));
            }

            // Calculate total derating factor
            const totalDeratingFactor = temperatureDeratingFactor * shadowDeratingFactor * fixedDeratingFactor * degradationFactor;

            // Mock energy yield data (replace with actual data retrieval logic)
            const energyYieldData = [
                { Place: "Aaradhya residency", Time: "2024-01-01", EnergyYield: 5.5 },
                { Place: "Aaradhya residency", Time: "2024-01-02", EnergyYield: 5.6 },
                // Add more data as needed
            ];

            // Filter energy yield data based on the place and time range
            const filteredEnergyYieldData = energyYieldData.filter(item =>
                item.Place === place &&
                new Date(item.Time) >= startTime &&
                new Date(item.Time) <= endTime
            );

            // Calculate total energy yield
            const totalEnergyYield = filteredEnergyYieldData.reduce((acc, curr) => acc + curr.EnergyYield, 0);

            // Calculate GHI
            let GHI;
            if (totalEnergyYield > 0) {
                GHI = totalEnergyYield / (solarCapacity * noOfDays * totalDeratingFactor);
            } else {
                GHI = "GHI calculation not possible due to lack of energy yield data.";
            }

            // Calculate specific yield
            const specificYield = totalEnergyYield / (solarCapacity * noOfDays);

            // Display results
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <h3>Results:</h3>
                <p>GHI: ${GHI} kWh/m²/day</p>
                <p>Specific Yield: ${specificYield} kWh/kW</p>
            `;
        });
