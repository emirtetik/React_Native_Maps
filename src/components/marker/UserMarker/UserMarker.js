import React from 'react'
import {Image } from 'react-native'
import { Marker } from 'react-native-maps'
import styles from "./UserMarker.style"


function UserMarker({coordinates,userImage,onSelect}) {
    return(
       <Marker coordinate={coordinates} onPress={onSelect}>
         <Image source={{ uri: userImage }} style={styles.image} />

       </Marker>
    )
    
}
export default UserMarker