import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LineChart } from 'react-native-chart-kit'

const Dashborad = () => {
    const summary = [
        { id: 1, title: "Current Cash Balance", data: "1,09,51,590$", bgColor: "#ace0fc", textColor: "#2F8BE6"},
        { id: 2, title: "Current Bank Balance", data: "8,15,720$", bgColor: "#DCBDFF", textColor: "#975AFF"},
        { id: 3, title: "Current Due", data: "1,96,350$", bgColor: "#BDF8B6", textColor: "#40C057"},
        { id: 4, title: "Sales", data: "12,49,660$", bgColor: "#FEDBA1", textColor: "#F77E17"},
        { id: 5, title: "Gross Profit", data: "49,270$", bgColor: "#ACE0FC", textColor: "#2F8BE6"},
        { id: 6, title: "GP Percentage", data: "4%", bgColor: "#DCBDFF", textColor: "#975AFF"},
    ];
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
            {/* inventory management */}
            
            <View className="flex flex-row gap-2 justify-between mb-4">
                {
                    summary.map((data)=>(
                        <View 
  key={data.id} 
  style={{
    flexDirection: 'column', 
    borderRadius: 10, 
    padding: 10, 
    backgroundColor: data.bgColor
  }}>
  <Text 
    style={{
      fontSize: 16,
      color: data.textColor
    }}>
    {data.data}
  </Text>
  <Text style={{ fontSize: 20 }}>
    {data.title}
  </Text>
</View>

                    ))
                }
                    
                </View>


                <Text className="text-xl font-bold text-white mb-4">Dashborad</Text>

                {/* sales overview */}
                <View className="mb-4">
        	        <Text className="text-lg text-white mb-2">Sales overview</Text>
                    <LineChart
                      data={{
                        labels: ['Jan', 'feb', "mar", "apr", 'may'],
                        datasets: [{
                            data: [10, 20, 30, 15, 50],
                        }],
                        legend: ['Sales Trend']
                      }}
                      width={400}
                      height={200}
                      yAxisLabel='$'
                      fromZero={true}
                      chartConfig={{
                        backgroundColor: '#ffffff',
                        backgroundGradientFrom: '#ffeeee',
                        backgroundGradientTo: '#ffeeff',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                      }}
                      style={{
                        marginVertical: 8,
                        borderRadius: 16,
                      }}
                    />
                </View>

                {/* order management */}
            </View>
        </ScrollView>
    </SafeAreaView>
    
  )
}

export default Dashborad