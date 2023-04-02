//functions of usage at component
const [modalVisible, setModalVisible] = useState(false);

const toggleModal = () => {
  setModalVisible(!modalVisible);
};
<Botton title="open or close modal " osPress={toggleModal}></Botton>;
