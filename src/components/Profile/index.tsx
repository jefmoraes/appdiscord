import React from "react";
import {View, Text} from 'react-native';
import { Avatar } from "../Avatar";
import { UseAuth } from "../../hooks/auth";
import { styles } from "./styles";
export function Profile() {
    const {user} = UseAuth();

    return(
        <View style={styles.container}>
            <Avatar urlImage={user.avatar}/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>
                <Text style={styles.message}> 
                    Hoje é dia de vitoria  
                </Text>
            </View>
        </View>
    );
}