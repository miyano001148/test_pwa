import { useState } from 'react';
import localforage from "localforage";
import axios from 'axios';
import Button from '@mui/material/Button';


const url = 'https://fcm.googleapis.com/fcm/send';
const serverKey = 'BOJZY_oRK0Z0Bqdi6RgbHj_Fy1hOR4RiBSeG3C5rT_rB07EfqNEpiauzGHK-_a7CeHFwaAaBGftpjnJ2ZQQcQOk'

type bodyProps = {
    registration_ids: string,
    notification: {
        title: string,
        body: string,
    },
};

const sendNotification = () => {

    const endPointUrl = url + '?apiKey=' + serverKey

    const sendPush = async () => {
        try {
            const token = localforage.getItem('fcm_token') as unknown as string
            const body: bodyProps = {
                registration_ids: token,
                notification: {
                    title: '自端末から送信',
                    body: '自端末から送信'
                }
            }
            const response = await axios.post(endPointUrl, body, {
                responseType: 'json'
            });
            console.log('成功：', response);
        } catch (error) {
            console.error("error:", error);
        }
    };
    return (
        <div>
            <Button variant='outlined' onClick={() => sendPush}>push確認</Button>
        </div>
    );
}

export default sendNotification