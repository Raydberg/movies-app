import { Text, View } from "react-native"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import '../global.css'

const queryClient = new QueryClient()
const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>

      <View>
        <Text>
          Welcome Movies App
        </Text>
      </View>

    </QueryClientProvider>
  )
}
export default RootLayout