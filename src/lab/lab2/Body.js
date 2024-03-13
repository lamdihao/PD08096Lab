import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import Toast from 'react-native-toast-message';

const Body = (props) => {
  const { onClickChangeBgFooter, onUpdateInfor } = props;
  const [name, setName] = useState('');
  const [linkImage, setLinkImage] = useState('');

  const handleChangeInfo = () => {
    if (name.length > 0 && linkImage.length > 0) {
      onUpdateInfor({ name, avatar: linkImage });
      showToast('Update information successfully', 'success');
    } else {
      showToast('Please enter your information', 'error');
    }
  };

  const showToast = (message, type) => {
    if (Platform.OS === 'android') {
      Toast.show({
        type: type,
        text1: message,
        visibilityTime: 2000,
      });
    }
  };

  const handleChangeFooter = () => {
    onClickChangeBgFooter();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Nhập tên mới</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your new name"
          onChangeText={(txt) => setName(txt)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dán địa chỉ avatar mới</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address new avatar"
          onChangeText={(txt) => setLinkImage(txt)}
        />
      </View>
      <TouchableOpacity
        onPress={handleChangeInfo}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Cập nhật thông tin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleChangeFooter}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Dổi màu footer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  label: {
    color: 'black',
    marginTop: 20,
  },
  input: {
    borderRadius: 8,
    backgroundColor: '#D1FAF0',
    padding: 13,
    marginTop: 3,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  inputContainer: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#66D7EE',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
});

export default Body;
