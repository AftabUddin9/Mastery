import { Dimensions, Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { images } from '../../constants'
import { useGlobalContext } from "../../context/GlobalProvider";
import { useState } from 'react'

const ChangePassword = () => {
    const [form, setForm] = useState({
      password: "",
      confirm_password: ""
    });
  
    const submit = async () => {
      if (form.password === "" || form.confirm_password === "") {
        Alert.alert("Error", "Please fill in all fields");
      }
    };

    
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Change your password
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <FormField
            title="Confirm Password"
            value={form.confirm_password}
            handleChangeText={(e) => setForm({ ...form, confirm_password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Submit"
            handlePress={submit}
            containerStyles="mt-7"
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Try Login?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ChangePassword