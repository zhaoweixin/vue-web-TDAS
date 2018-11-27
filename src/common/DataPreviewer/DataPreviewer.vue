<template lang="html">
    <div id="datapreviewer">
        <vs-row vs-h="4">
            <vs-row vs-h="4">
                <!--数据连接信息栏-->
                <vs-avatar icon="grid_on" />
                <h3 style="margin: auto">DataName</h3>
            </vs-row>
            <vs-row vs-h="8">
                <div id="testdiv" style="position:absolute" :data="checkBoxesList"></div>
                <div id="draggableMenu" style="font-size: 8px; position:absolute; width: 300px; height: 150px; background-color: rgba(200, 200, 200, 0.2)"  v-bind:class="{active: isActive}">
                    <div style="float: left; width:260px; height:30px; text-align:left; ">
                        <p style="padding: 12px">Connect</p>
                    </div>
                    <div style="float: left; width:40px; height:20px;">
                        <vs-button color="rgb(128,128,128)" type="flat" icon="clear" style="padding: auto"></vs-button>
                    </div>
                    
                    <div :key="index" v-for = "(todo, index) in todos">
                        <div style="float: left; width:75px; height:60px; padding-top: 10px">
                            <img :src = "getImgUrl(todo.route)"  style="float: left; width:75px; height:30px;">
                            <vs-button color="rgb(128,128,128)" type="flat" style="float: left; width:75px; height:30px; padding-top: 5px;">{{ todo.type }}</vs-button>
                        </div>
                    </div>
                    
                    <div style="float: left; width:300px; padding-top:10px">
                        <div style="float: left; width:150px;">
                            <vs-select color="rgb(128,128,128)" :label="leftData" v-model="select1" style="float: left; width:150px;">
                                <vs-select-item :key= "index" :value="item.value" :text="item.text" v-for= "(item,index) in options1" />
                            </vs-select>
                        </div>
                        
                        <div style="float: left; width:150px;">
                            <vs-select color="rgb(128,128,128)" :label="rightData" v-model="select2" style="float: left; width:150px;">
                                <vs-select-item :key = "index" :value="item.value" :text="item.text" v-for= "(item,index) in options2" />
                            </vs-select>
                        </div>
                    </div>
                    
                </div>
            </vs-row>
        </vs-row>
        <vs-row vs-h="8">
            <vs-row vs-h="2">
                <!--数据列表功能区-->
            </vs-row>
            <vs-row vs-h="10">
                <!--数据列表查看区-->
            </vs-row>
        </vs-row>
    </div>
</template>
<script>
import * as d3 from 'd3'
import * as path from 'path'
import Vue from 'vue'
let che = []
export default{
    name: 'DataPreviewer',
    data: function(){
        return {
            state:{
                storeBox:[]
            },
            layerWidth:'',
            layerHieght:'',
            id:'DataOperater',
            dataTabs: {'count': 0, datalist: []},
            url: 'http://localhost:3000/api/svg',
            todos: [
                {
                    id: 1,
                    route: "left-join.svg",
                    type: "left-join"
                },
                {
                    id: 2,
                    route: "right-join.svg",
                    type: "right-join"
                },
                {
                    id: 3,
                    route: "inner-join.svg",
                    type: "inner-join"
                },
                {
                    id: 4,
                    route: "full-join.svg",
                    type: "full-join"
                }
            ],
            dataSource:{
                source: 'source',
                target: 'target'
            },
            isActive: true,
            select1:2,
            select2:7,
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ],
            options1:[
                {text:'IT',value:0},
                {text:'Blade Runner',value:2},
                {text:'Thor Ragnarok',value:3}
            ],
            options2:[
                {text: 'Square', value: 1},
                {text: 'Rectangle', value: 2},
                {text: 'Rombo', value: 3},
                {text: 'Romboid', value: 4},
                {text: 'Trapeze', value: 5},
                {text: 'Triangle', value: 6},
                {text: 'Polygon', value: 7},
                {text: 'Regular polygon', value: 8},
                {text: 'Circumference', value: 9},

                {text: 'Circle', value: 10},
                {text: 'Circular sector', value: 11},
                {text: 'Circular trapeze', value: 12}
            ],
            leftData:'data1',
            rightData:'data2'
        }
    },
    computed:{
        checkBoxesList () {
            return this.$store.state.checkboxes
        }
    },
    watch:{
        checkBoxesList (val, oldVal) {
            this.updateCheckBoxes(val)
        }
    },
    components: {
    },
    methods: {
        getImgUrl(pet) {
            var images = require.context('../../assets/', false, /\.svg$/)
            return images('./' + pet)
        },
        controlPanelInit(id){
            let that = this,
                container = d3.select('#' + id)
            this.chartResize(id, window.innerWidth * 0.875, window.innerHeight * 0.65 * 0.33)
        },
        chartResize(id, innerWidth, innerHeight){
            let height = innerHeight > innerWidth * 2 ? innerWidth * 2 : innerHeight,
                width = innerWidth;
            d3.select('#' + id).attr('width', width).attr('height', height).style('fill', "steelblue")
        },
        draggableMenuInit(){
            let rectDrag = d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended)
            let rect = d3.select('#draggableMenu')
                .call(rectDrag)

            let button = d3.select('#testbutton')
                .on('click', function(){
                    console.log('buttonClick')
                })

            function dragstarted(d){
                console.log('dragstarted')
            }
            function dragged(d){
                d3.select(this)
                    .style("left", function(){
                        let re = parseInt(d3.select(this).style('left')) + d3.event.dx
                        return re + 'px'
                    })
                    .style("top", function(){
                        let re = parseInt(d3.select(this).style('top')) + d3.event.dy
                        return re + 'px'
                    });
            }
            function dragended(d){
                console.log('dragended')
            }
        },
        addDataTabs(dataName){
            if(this.dataTabs.count >= 2) return;
            
            let top = 50,
                left = this.dataTabs.count * 150 + 100,
                width = 100,
                height = 25,
                divId = 'div_' + dataName,
                randomColor = d3.scaleOrdinal(d3.schemeCategory10)

            let div = d3.select('#testdiv')
                div.append('div')
                    .attr('id', divId)
                    .style('top', top + 'px')
                    .style('left', left + 'px')
                    .style('width', width + 'px')
                    .style('height', height + 'px')
                    .style('background-color', 'rgb(235,235,235)')
                    .style('position', 'absolute')
                    .style('border-left', function(){
                        return '5px solid ' + randomColor(Math.floor(Math.random() * 10))
                    })
                    .text(dataName)
                    .style('padding-top', '4px')
                    .style('font-size', '.8rem')
                
            if(this.dataTabs.datalist.indexOf(dataName) == -1){
                this.dataTabs.count ++ 
                this.dataTabs.datalist.push(dataName)
            }
        },
        delDataTabs(dataName){
            if(this.dataTabs.count <= 0) return;
            let dataIndex = this.dataTabs.datalist.indexOf(dataName),
                divId = 'div_' + dataName
            
            d3.select('#' + divId).remove()

            if(dataIndex > -1){
                this.dataTabs.count --
                this.dataTabs.datalist.splice(dataIndex, 1)
            }
            
        },
        loadSvg(){
            let svg = d3.select('#testbutton')
                svg.selectAll('.pict')
                .data(["http://localhost:3000/api/svg"])
                .enter()
                .append('image')
                .attr("xlink:href", function(d){return d;})
                .attr("width", 20)
                .attr("height", 20)
                .attr('x', 0)
                .attr('y', 0)
                
        },
        updateCheckBoxes : function(val) {
            //find diff(add, del) val
            let _val = [...val],
                _oldVal = [...this.state.storeBox]
            if(_val.length > _oldVal.length){
                //add Data
                let toAddTab = _val.pop()
                this.addDataTabs(toAddTab)
            } else {
                //delete Data
                let toDelTab = _oldVal.filter(x => !_val.includes(x))[0]
                this.delDataTabs(toDelTab)
            }
            this.$set(this.state, 'storeBox', [...val])
        }
    },
    mounted() {
        this.controlPanelInit(this.id)
        this.draggableMenuInit()
        window.addEventListener("resize", () => {
            this.chartResize(this.id, window.innerWidth * 0.875, window.innerHeight * 0.65 * 0.33);
        });
    }
}
</script>
<style>
</style>