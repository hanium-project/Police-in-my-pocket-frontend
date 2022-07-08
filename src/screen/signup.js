const App = () => {
    const [titleText, setTitleText] = useState("회원가입");
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [checkpw, setCheckpw] = useState('')
    const [name, setName] = useState('')
    const [birth, setBirth] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [emergency1, setEmergency1] = useState('')
    const [emergency2, setEmergency2] = useState('')
    const [emergency3, setEmergency3] = useState('')
    const [text, onChangeText] = useState("");
  
  const showDatePicker = () => {
      setDatePickerVisibility(true);
  };
  
  const hideDatePicker = () => {
      setDatePickerVisibility(false);
  };
  
  const handleConfirm = (date) => {
    hideDatePicker();
    onChangeText(date.format("yyyy/MM/dd"))
  };
    const login = (id, password) => {
      alert(`id: ${id} password: ${password}`);
    }
  
    const [checked, setChecked] = React.useState('남');
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.titleText}>
         {"\n"}
          {titleText}
          {"\n"}
        </Text>
        </View>
        <TextInput style={styles.textInput}
          placeholder = "아이디"
          label = "아이디"
          labelStyle={{marginLeft: 10}}
          placeholderTextColor = "white"
          onChangeText={text => setId(text)} value={id} />
        <TextInput style={styles.textInput}
          placeholder = "비밀번호"
          placeholderTextColor = "white"
          onChangeText={text => setPassword(text)} value={password} 
          secureTextEntry={true}/>
        <TextInput style={styles.textInput}
          placeholder = "비밀번호 재확인"
          placeholderTextColor = "white"
          onChangeText={text => setCheckpw(text)} value={checkpw} 
          secureTextEntry={true}/>
        <TextInput style={styles.textInput}
          placeholder = "이름"
          placeholderTextColor = "white"
          onChangeText={text => setName(text)} value={name} />
      <View>
          <TouchableOpacity onPress={showDatePicker}>
              <TextInput style={styles.textInput}
                  pointerEvents="none"
                  placeholder="생년월일"
                  placeholderTextColor= "white"
                  underlineColorAndroid="transparent"
                  editable={false}
                  value={text}
              />
              <DateTimePickerModal
                  headerTextIOS="생년월일"
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
              />
          </TouchableOpacity>
      </View>
      <View>
        <RadioForm
          radio_props = {gender}
          initial={0}
          onPress={(value) => {}} 
          buttonSize={15}
          buttonOuterSize={15}
          selectedButtonColor={'white'}
          labelStyle={{fontSize: 15, }}
          disable={true}
          formHorizontal={true}
        />
        </View>
        <TextInput style={styles.textInput}
          placeholder = "주소"
          placeholderTextColor = "white"
          onChangeText={text => setAddress(text)} value={address} />
  
        <TextInput style={styles.textInput}
          placeholder = "휴대전화"
          placeholderTextColor = "white"
          onChangeText={text => setPhone(text)} value={phone} />
  
        <TextInput style={styles.textInput}
          placeholder = "비상연락처1"
          placeholderTextColor = "white"
          onChangeText={text => setEmergency1(text)} value={emergency1} />
  
        <TextInput style={styles.textInput}
          placeholder = "비상연락처2"
          placeholderTextColor = "white"
          onChangeText={text => setEmergency2(text)} value={emergency2} />
  
        <TextInput style={styles.textInput}
          placeholder = "비상연락처3"
          placeholderTextColor = "white"
          onChangeText={text => setEmergency3(text)} value={emergency3} />
  
          <TouchableOpacity
          style= {styles.submitButton}
          onPress = {() => login(email, password),
          () =>{
            if(password === checkpw){
            }
            else{
              return alert("비밀번호가 일치하지 않습니다");
            }
          }
          }>
            <Text style = {styles.submitButtonText}>Submit</Text>  
          </TouchableOpacity>
      </ScrollView>
    );
  };