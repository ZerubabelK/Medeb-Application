import {useState} from 'react';

export default image_upload = () => {
  const [imageSource, setImageSource] = useState(null);

  const chooseImage = () => {
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setImageSource(source);
        uploadImage(response);
      }
    });
  };

  const uploadImage = async response => {
    // create a new form data
    let formData = new FormData();
    // append image file to form data
    formData.append('image', {
      uri: response.uri,
      type: response.type,
      name: response.fileName,
    });
    // send form data to backend server
    try {
      let res = await fetch(
        'https://your-backend-server.com/api/upload-profile-picture',
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      let jsonRes = await res.json();
      console.log(jsonRes);
    } catch (error) {
      console.error(error);
    }
  };
};
