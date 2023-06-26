import React,{useRef,useState} from 'react'
import { View,Text,TextInput,FlatList,StyleSheet } from 'react-native'
import Config from 'react-native-config';
import MapView from 'react-native-maps';
import useFetch from './hooks/useFetch';
import Loading from './components/Loading/Loading';
import UserMarker from './components/marker/UserMarker/UserMarker';
import InfoCard from './components/Modal/infoCard/InfoCard';

API_URL="https://random-data-api.com/api/v2/users?size=30"


const App = ( ) => {
  const mapRef = useRef()
  const {data,loading,error} = useFetch(API_URL);
  const [user,setUser] = useState();
  const [infovisible,setınfoVisible] = useState(false);


   
  const renderUserMarkers = () => {
   return data.map(({id,first_name,last_name,username, avatar, address:{coordinates}}) => {
      return(
        <UserMarker
        key={id}
        coordinates={
          {
           latitude:coordinates.lat,
           longitude:coordinates.lng,
          }
        }
        userImage={avatar}
        onSelect={() => handleMarkerSelect(coordinates,{first_name,last_name,username})}
        
        />
      )
     })
  }

  function handleMarkerSelect(coor,selectedUser) {
    setUser(selectedUser)
    handleModalVisible();
    mapRef.current.animateToRegion({
        latitude: coor.lat,
        longitude: coor.lng,
        latitudeDelta: 5,
        longitudeDelta: 5,
    })
  }
 
  function handleModalVisible() {
     setınfoVisible(!infovisible)
  }
     return(

        <View style={styles.container}>

        <MapView ref={mapRef}  style={styles.map}>
       {data && renderUserMarkers()}
        </MapView>

        {loading && <Loading />}

   { user &&  (  <InfoCard visible={infovisible} onClose={handleModalVisible}  user={user}/>
   )
 }

        </View>
     )
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
  },
  map:{
    flex:1,
  },
 header:{
  fontSize: 24,
  margin:10
 }
 
})
export default App



















//  const renderElements = ( {item}) => <Text>{item}</Text>;
  
//  const [text, setText] = React.useState("")

//  const [addList, setAddList] = React.useState([])
 
//  function addTolist() {
//    if(!text){
//     return;
//    }
//   setAddList([...addList, text]);
  
//  }


      {/* <Text style={styles.header}>   Testingasdasfd  </Text> */}
{/* 
      <FlatList 
      data={[addList]} 
      renderItem={renderElements} 
      testID='list' 
      keyExtractor={(_, index) => index.toString()}/>

      <TextInput
      placeholder='Add...'  
      style={styles.input} 
      onChangeText={setText} 
      testID='Change-text'/>

       <Button 
       title="Add" 
       onClick={addTolist} /> */}


        // input:{
  //   backgroundColor:"#bdbdbdbd",
  //   padding:10,
  //   margin:10,
  //   borderWidth:1,
  //   borderColor:"gray",
  //   borderRadius:8,
  // }