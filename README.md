# Tổng Hợp MQTT

## Broker
1. MQTT Broker open source
2. Lưu ý khi cài đặt
* MacOS
sau khi cài đặt không tự export biến môi trường nên phải 
```
brew install mosquitto
/usr/local/sbin/mosquitto -c /usr/local/etc/mosquitto/mosquitto.conf
``` 
3. Command cơ bản
* Subscribe
[Tài liệu](https://mosquitto.org/man/mosquitto_sub-1.html  )
```mosquitto_sub -t <my_topic>```
* Publish
[Tài liệu](https://mosquitto.org/man/mosquitto_pub-1.html)
```mosquitto_pub -t <my_topic> -m <my_message>```

## Tham Khảo
* [mosquitto](https://mosquitto.org/)
* [MQTT.js](https://www.npmjs.com/package/mqtt)