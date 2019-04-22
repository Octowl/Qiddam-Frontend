import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, Text } from "react-native";
import TimePicker from "react-native-24h-timepicker";
import * as actionCreators from "../../store/actions";

import {
  Container,
  Content,
  InputGroup,
  Input,
  Icon,
  Header,
  List,
  ListItem,
  Body,
  Form,
  Item,
  Button,
  DatePicker,
  ActionSheet,
  Root,
  Picker
} from "native-base";

class ActivityCreateForm extends Component {
  onCancel = () => {
    this.TimePicker.close();
  };

  onConfirm = (hour, minute) => {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  };
  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };
  setCategory = newCategory => {
    this.setState({ chosenCategory: newCategory });
  };
  onValueChange = value => {
    this.setState({ selected: value });
  };

  onValueChangeGender = value => {
    this.setState({ selectedGender: value });
  };

  state = {
    title: "",
    description: "",
    category: "",
    gender: "",
    location: "",
    number_of_people: "",
    date: "",
    time: "",
    chosenDate: new Date()
  };

  async componentDidMount() {
    await this.props.fetchCategories();
  }

  render() {
    if (!this.props.categories) {
      return <Text>قاعد يحمّل</Text>;
    } else {
      return (
        <Root>
          <Content>
            <Header transparent />
            <List>
              <ListItem style={{ borderBottomWidth: 0 }}>
                <Body>
                  <Form>
                    <Item
                      rounded
                      style={{
                        backgroundColor: "white",
                        marginTop: 10,
                        marginBottom: 10
                      }}
                    >
                      <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={title => this.setState({ title })}
                        placeholder="عنوان الدعوة"
                      />
                    </Item>
                    <Item
                      rounded
                      style={{
                        backgroundColor: "white",
                        marginTop: 10,
                        marginBottom: 10
                      }}
                    >
                      <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={description =>
                          this.setState({ description })
                        }
                        placeholder="وصف أكثر عن الدعوة"
                      />
                    </Item>

                    <Item>
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        placeholder=" نوع الدعوة"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange}
                      >
                        {this.props.categories.map(category => (
                          <Picker.Item
                            label={category.title}
                            value={category.title}
                            key={category.id}
                          >
                            {category.title}
                          </Picker.Item>
                        ))}
                      </Picker>
                    </Item>

                    <Item>
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        placeholder="أولاد ولا بنات؟"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selectedGender}
                        onValueChange={this.onValueChangeGender}
                      >
                        <Picker.Item label="بنات" value="key0" />
                        <Picker.Item label="أولاد" value="key1" />
                        <Picker.Item label="الكل" value="key2" />
                      </Picker>
                    </Item>

                    <Item
                      rounded
                      style={{
                        backgroundColor: "white",
                        marginTop: 10,
                        marginBottom: 10
                      }}
                    >
                      <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={location => this.setState({ location })}
                        placeholder="المكان"
                      />
                    </Item>
                    <Item
                      rounded
                      style={{
                        backgroundColor: "white",
                        marginTop: 10,
                        marginBottom: 10
                      }}
                    >
                      <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={number_of_people =>
                          this.setState({ number_of_people })
                        }
                        placeholder="عدد المدعوّين"
                      />
                    </Item>

                    <DatePicker
                      defaultDate={new Date(2019, 4, 4)}
                      minimumDate={new Date(2019, 1, 1)}
                      maximumDate={new Date(2019, 12, 31)}
                      locale={"en"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText="تاريخ الدعوة"
                      textStyle={{ color: "green" }}
                      placeHolderTextStyle={{ color: "#d3d3d3" }}
                      onDateChange={this.setDate}
                      disabled={false}
                    />

                    <View>
                      <TouchableOpacity onPress={() => this.TimePicker.open()}>
                        <Text>وقت الدعوة</Text>
                      </TouchableOpacity>
                      <Text>{this.state.time}</Text>
                      <TimePicker
                        ref={ref => {
                          this.TimePicker = ref;
                        }}
                        onCancel={() => this.onCancel()}
                        onConfirm={(hour, minute) =>
                          this.onConfirm(hour, minute)
                        }
                      />
                    </View>
                  </Form>
                </Body>
              </ListItem>
              <Button
                onPress={() =>
                  this.props.createActivity(this.state, this.props.navigation)
                }
                style={{ backgroundColor: "rgb(155, 166, 87)" }}
              >
                <Text>انشر الدعوة</Text>
              </Button>
            </List>
          </Content>
        </Root>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    categories: state.activityReducer.categories
  };
};
const mapDispatchToProps = dispatch => ({
  createActivity: (activityData, navigation) =>
    dispatch(actionCreators.createActivity(activityData, navigation)),
  fetchCategories: () => dispatch(actionCreators.fetchCategories())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityCreateForm);
