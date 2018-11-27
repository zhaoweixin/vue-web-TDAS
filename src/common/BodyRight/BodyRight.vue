<template>
    <div id = "bodyright">
        <vs-row vs-justify="center">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                <div slot="header">
                <h4>
                    LineChart
                </h4>
                </div>
                <div slot="media">
                <img src="../../assets/line-chart.png">
                </div>
                <div slot="footer">
                <vs-row vs-justify="flex-end">
                    <vs-button color="primary" vs-type="gradient" vs-icon="add"></vs-button>
                </vs-row>
                </div>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                <div slot="header">
                <h4>
                    Pie Chart
                </h4>
                </div>
                <div slot="media">
                <img src="../../assets/pie-chart.png">
                </div>
                <div slot="footer">
                <vs-row vs-justify="flex-end">
                    <vs-button color="primary" vs-type="gradient" vs-icon="add"></vs-button>
                </vs-row>
                </div>
            </vs-col>

            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
            <vs-card actionable class="cardx">
                <div slot="header">
                <h4>
                    Bar Chart
                </h4>
                </div>
                <div slot="media">
                <img src="../../assets/bar-chart.png">
                </div>
                <div slot="footer">
                <vs-row vs-justify="flex-end">
                    <vs-button color="primary" vs-type="gradient" vs-icon="add"></vs-button>
                </vs-row>
                </div>
            </vs-card>
            </vs-col>
            
        </vs-row>
    </div>
</template>
<script>
</script>
<style scoped>
    #bodyright{
        float: right;
        width: 15%;
        height: 75%;
    }
</style>