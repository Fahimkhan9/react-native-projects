/* eslint-disable prettier/prettier */
import React,{ useState,useEffect } from 'react';
import {View,  StyleSheet, ScrollView} from 'react-native';
import {Fab, H1, Icon,Container,List,ListItem, Left,Button, Body,Text, Title, Right, CheckBox, Spinner} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';




const Home = ({navigation,route}) => {
    const [listofseasons,setListofseasons] = useState([]);
    const [loading, setLoading] = useState(false);

    const isfocused = useIsFocused();

    const getList = async () => {
        setLoading(true);

        const storedValue = await AsyncStorage.getItem('@season_list');
        if (!storedValue){
            setListofseasons([]);
        }

        const list = JSON.parse(storedValue);
        setListofseasons(list);
        setLoading(false);

    };


    const deleteSeason = async (id) => {
        const newList = await listofseasons.filter(_list => _list.id !== id);
        await AsyncStorage.setItem('@season_list',JSON.stringify(newList));
        setListofseasons(newList);
    };

    const markComplete = async (id) => {
        const newArr = listofseasons.map(list => {
            if (list.id === id){
                list.isWatched = !list.isWatched;
            }
            return list;
        });
        await AsyncStorage.setItem('@season_list',JSON.stringify(newArr));
        setListofseasons(newArr);

    };


    useEffect(() => {
        getList();
    },[isfocused]);


    if (loading){
        return (
            <Container
            style={styles.container}
            >
                <Spinner
                color="#00b7c2"
                />
            </Container>
        );
    }

  return (
    <ScrollView contentContainerStyle={styles.container}>

    {
        listofseasons.length === 0 ? (
            <Container
            style={styles.container}
            >
                <H1
                style={styles.heading}
                >Watchlist is empty.Please add a season</H1>
            </Container>
        ) : (
            <>
                   <H1
                style={styles.heading}
                >Next Series to watch</H1>
                <List>
            {
                listofseasons.map(season => (
                    <ListItem
                    style={styles.listItem}
                    key={season.id}
                    >
                        <Left>
                            <Button
                            style={styles.actionButton}
                            danger
                            onPress={( ) => deleteSeason(season.id) }
                            >
                            <Icon
                            name="trash"
                            active
                            />
                            </Button>
                            <Button
                            style={styles.actionButton}
                            onPress={() => {
                              navigation.navigate('Edit',{season});
                            }}
                            >
                            <Icon
                            name="edit"
                            type="Feather"
                            />
                            </Button>
                        </Left>
                <Body>
                <Title
                style={styles.seasonName}
                >
                    {season.name}
                </Title>
                <Text
                note

                >
                    {season.totalNoSeason} seasons to watch</Text>
                </Body>

                 <Right>
                     <CheckBox
                     checked={season.isWatched}
                     onPress={( ) => markComplete(season.id) }
                     />
                 </Right>
                    </ListItem>

                ))
            }

                </List>
            </>
        )
    }






      <Fab
        style={{
          backgroundColor: '#5067FF',
        }}
        position="bottomRight"
        onPress={()=>navigation.navigate('Add')  }
        >
        <Icon name="add" />
      </Fab>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  emptyContainer: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  actionButton: {
    marginLeft: 5,
  },
  seasonName: {
    color: '#fdcb9e',
    textAlign: 'justify',
  },
  listItem: {
    marginLeft: 0,
    marginBottom: 20,
  },
});
