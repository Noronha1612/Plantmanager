import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function(key: string, value: string) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (err) {
        throw new Error(err);
    }
}