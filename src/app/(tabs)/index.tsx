import { StyleSheet,View ,Text} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';

export default function TabOneScreen() {
  return (
    <View  className='flex justify-center items-center'>
      <Text className='font-extrabold text-2xl text-red-600'>helllo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
