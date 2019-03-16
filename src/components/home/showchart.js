import React, { Component } from 'react'
import { Chart } from "react-charts";
import ChartConfig from '../libraries/ChartConfig';

class ShowChart extends Component {

    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <ChartConfig dataType="ordinal">
                        {({ data }) => (
                            <Chart
                                data={data}
                                series={{ type: 'bar' }}
                                axes={[
                                    { primary: true, type: 'ordinal', position: 'bottom' },
                                    { position: 'left', type: 'linear', stacked: true },
                                ]}
                                primaryCursor
                                secondaryCursor

                            />
                        )}
                    </ChartConfig>

                </div>

            </div>
        )
    }
}


export default ShowChart