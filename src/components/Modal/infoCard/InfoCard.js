import Modal from 'react-native-modal';
import React from 'react'
import { View,Text,SafeAreaView } from 'react-native'
import styles from "./InfoCard.style"

const InfoCard = ({visible,onClose,user}) => {
return(
    <Modal isVisible={visible} swipeDirection="down" onSwipeComplete={onClose} onBackdropPress={onClose} onBackButtonPress={onClose}  style={styles.modal} backdropOpacity={0.3}>
    <View style={styles.userContainer}>
        <Text style={styles.username}>
            
            {user.username}
        </Text>
        <Text style={styles.fullname}>
            {user.first_name} {user.last_name}
        </Text>
        
        <SafeAreaView style={styles.areaContainer}/>
    </View>
    </Modal>
)
}
export default InfoCard