<template>
    <div class="pa-3">
        <v-row>
            <v-col cols="3">
                <v-card elevation="1" class="pa-3" height="100%">
                    <div class="d-flex align-center mb-3">
                        <p class="text-body-2 font-weight-bold">Line</p>
                        <v-btn icon="mdi-dots-vertical" class="ml-auto text-grey-darken-1" variant="flat" size="x-small"></v-btn>
                    </div>
                    <Line :data="areadata" :options="areaoption" :width="width" :height="height"/>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card elevation="1" class="pa-3" height="100%">
                    <div class="d-flex align-center mb-3">
                        <p class="text-body-2 font-weight-bold">Bar</p>
                        <v-btn icon="mdi-dots-vertical" class="ml-auto text-grey-darken-1" variant="flat" size="x-small"></v-btn>
                    </div>
                    <Bar :data="databar" :options="optionsbar" :width="width" :height="height"/>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card elevation="1" class="pa-3" height="100%">
                    <div class="d-flex align-center mb-3">
                        <p class="text-body-2 font-weight-bold">Pie</p>
                        <v-btn icon="mdi-dots-vertical" class="ml-auto text-grey-darken-1" variant="flat" size="x-small"></v-btn>
                    </div>
                    <Pie :data="datapie" :options="optionspie" />
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card elevation="1" class="pa-3" height="100%">
                    <div class="d-flex align-center mb-3">
                        <p class="text-body-2 font-weight-bold">Radar</p>
                        <v-btn icon="mdi-dots-vertical" class="ml-auto text-grey-darken-1" variant="flat" size="x-small"></v-btn>
                    </div>
                    <Line :data="dataline" :options="optionsline" :width="width" :height="height"/>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card class="pa-6" height="100%">
                    <v-table density="compact">
                        <thead>
                            <tr>
                                <th class="text-left">
                                Title
                                </th>
                                <th class="text-left">
                                Title
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Value 1</td>
                                <td>Value 1</td>
                            </tr>
                            <tr>
                                <td>Value 2</td>
                                <td>Value 2</td>
                            </tr>
                            <tr>
                                <td>Value 3</td>
                                <td>Value 3</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="pa-6" height="100%">
                    <v-table density="compact">
                        <thead>
                            <tr>
                                <th class="text-left">
                                Title
                                </th>
                                <th class="text-left">
                                Title
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Value 1</td>
                                <td>Value 1</td>
                            </tr>
                            <tr>
                                <td>Value 2</td>
                                <td>Value 2</td>
                            </tr>
                            <tr>
                                <td>Value 3</td>
                                <td>Value 3</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-card elevation="1" class="pa-3" height="100%">
                    <div class="d-flex align-center mb-3">
                        <p class="text-body-2 font-weight-bold">Line</p>
                        <p class="ml-auto text-body-2 text-red">- 0.12%</p>
                    </div>
                    <Line :data="linedata1" :options="lineoptionforallbottomchart"/>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card elevation="1" class="pa-3" height="100%">
                    <div class="d-flex align-center mb-3">
                        <p class="text-body-2 font-weight-bold">Line</p>
                        <p class="ml-auto text-body-2 text-green">+ 0.24%</p>
                    </div>
                    <Line :data="linedata2" :options="lineoptionforallbottomchart"/>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card elevation="1" class="pa-3" height="100%">
                    <div class="d-flex align-center mb-3">
                        <p class="text-body-2 font-weight-bold">Line</p>
                        <p class="ml-auto text-body-2 text-red">- 0.32%</p>
                    </div>
                    <Line :data="linedata3" :options="lineoptionforallbottomchart"/>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card elevation="1" class="pa-3" height="100%">
                    <div class="d-flex align-center mb-3">
                        <p class="text-body-2 font-weight-bold">Line</p>
                        <p class="ml-auto text-body-2 text-green">+ 0.64%</p>
                    </div>
                    <Line :data="linedata4" :options="lineoptionforallbottomchart"/>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, LineElement, BarElement, ArcElement, RadialLinearScale, Filler} from 'chart.js'
import { Line, Bar, Pie, Radar } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement, RadialLinearScale, Filler)

export default {
    components: {
        Line, Bar, Pie, Radar
    },
    props: {
        width: {
            type: Number,
            default: 10
        },
        height: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {
            areadata: {                
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: (ctx) => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0,0,0,160);

                            gradient.addColorStop(0, 'rgb(61, 154, 240, 0.5)');
                            gradient.addColorStop(1, 'rgb(255, 255, 255,0.5)');

                            return gradient;
                        },
                        pointBackgroundColor: '#fff',
                        borderColor: '#3D9AF0',
                        data: [80, 50, 70, 90, 20, 30],
                        fill: true
                    }
                ]
            },
            areaoption: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales:{
                    x:{
                        ticks:{
                            font:{
                                size: 10
                            }
                        },
                        grid: {
                            display: false
                        }
                    },
                    y:{
                        display: false,
                        min: 0,
                        max: 100,
                        ticks: {
                            stepSize: 20,
                            maxTicksLimit: 6
                        }
                    }
                }
            },

            databar:{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [60, 40, 80, 90, 70, 30]
                    }
                ]
            },
            optionsbar:{
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales:{
                    x:{
                        ticks:{
                            font:{
                                size: 10
                            }
                        },
                        grid: {
                            display: false
                        }
                    },
                    y:{
                        display: false,
                        min: 0,
                        max: 100,
                        ticks: {
                            stepSize: 20,
                            maxTicksLimit: 6
                        }
                    }
                }
            },

            datapie:{
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                    {
                    backgroundColor: ['#FBC02D', '#FFEE58', '#F57F17', '#FFF59D'],
                    data: [40, 20, 80, 10]
                    }
                ]
            },
            optionspie:{
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            },

            dataline:{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Data One',
                        pointBackgroundColor: '#fff',
                        borderColor: '#45af5b',
                        data: [80, 50, 70, 90, 20, 30]
                    }
                ]
            },
            optionsline:{
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales:{
                    x:{
                        ticks:{
                            font:{
                                size: 10
                            }
                        },
                        grid: {
                            display: false
                        }
                    },
                    y:{
                        display: false,
                        min: 0,
                        max: 100,
                        ticks: {
                            stepSize: 20,
                            maxTicksLimit: 6
                        }
                    }
                }
            },
            
            linedata1: {                
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Data One',
                        pointBackgroundColor: '#fff',
                        borderColor: '#FF4B42',
                        data: [40, 60, 20, 80, 70, 70],
                    }
                ]
            },
            linedata2: {                
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Data One',
                        pointBackgroundColor: '#fff',
                        borderColor: '#45af5b',
                        data: [30, 30, 50, 60, 20, 70],
                    }
                ]
            },
            linedata3: {                
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Data One',
                        pointBackgroundColor: '#fff',
                        borderColor: '#FF4B42',
                        data: [80, 90, 70, 60, 80, 70]
                    }
                ]
            },
            linedata4: {                
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Data One',
                        pointBackgroundColor: '#fff',
                        borderColor: '#45af5b',
                        data: [10, 60, 60, 60, 80, 90]
                    }
                ]
            },
            lineoptionforallbottomchart:{
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales:{
                    x:{
                        display: false
                    },
                    y:{
                        display: false
                    }
                }
            }
        }
    }
}
</script>