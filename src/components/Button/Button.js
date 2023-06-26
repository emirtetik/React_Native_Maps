import React from 'react'
import { TouchableOpacity,Text } from 'react-native'
import styles from "./Button.style"
const Button =  ({title,onClick}) => {
    return (
        <TouchableOpacity onPress={onClick} style={styles.container} testID='touchable-button'>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default Button