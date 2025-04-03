import React, { useState, useEffect } from "react";
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, Platform, KeyboardAvoidingView, FlatList, useWindowDimensions } from "react-native";
import { theme } from "@/styles/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchInput from "./search-input/SearchInput";
import SearchButton from "./search-button/SearchButton";
import DropdownItem from "./dropdown-item/DropdownItem";
import DropdownHeader from "./dropdown-header/DropdownHeader";

type SearchData = {
  id: string;
  name: string;
};

interface SearchBarWithDropdownProps {
  data?: SearchData[];
  placeholder?: string;
  searchButtonLabel?: string;
  dropdownTitle?: string;
  showReviewIcon?: boolean;
  onItemSelect?: (item: SearchData) => void;
}

const defaultData: SearchData[] = [
  { id: "1", name: "Skin Tint" },
  { id: "2", name: "Rare Beauty" },
  { id: "3", name: "Sunscreen" },
  { id: "4", name: "Chartlotte Tilbury" },
  { id: "5", name: "Sol De Janeiro" },
  { id: "6", name: "Naturism" },
  { id: "7", name: "Laneige" },
  { id: "8", name: "Phlur" },
];

const SearchBarWithDropdown: React.FC<SearchBarWithDropdownProps> = ({
  data = defaultData,
  placeholder = "Search the website",
  searchButtonLabel = "SEARCH",
  dropdownTitle = "Popular Search Results",
  showReviewIcon = true,
  onItemSelect,
}) => {
  const [searchText, setSearchText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const { height } = useWindowDimensions();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener(Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    if (searchText === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
      if (filtered.length > 0) setIsVisible(true);
      setFilteredData(filtered);
    }
  }, [searchText, data]);

  const handleItemSelect = (item: SearchData) => {
    setSearchText(item.name);
    Keyboard.dismiss();
    onItemSelect?.(item);
  };

  const renderItem = ({ item }: { item: SearchData }) => <DropdownItem item={item} onPress={() => handleItemSelect(item)} />;

  return (
    <TouchableWithoutFeedback testID="search-bar" onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={styles.searchContainer}>
            <SearchInput placeholder={placeholder} value={searchText} onChangeText={setSearchText} autoCorrect={false} onFocus={() => setIsVisible(true)} />
            <SearchButton label={searchButtonLabel} />
            {showReviewIcon && (
              <View style={styles.reviewContainer}>
                <Ionicons name="star" size={24} color="gold" />
              </View>
            )}
          </View>

          {isVisible && (
            <View
              style={[
                styles.dropdown,
                {
                  height: isKeyboardVisible ? height * 0.36 : height - 100,
                },
              ]}
            >
              <DropdownHeader title={dropdownTitle} onClose={() => setIsVisible(false)} />
              <FlatList data={filteredData} renderItem={renderItem} keyExtractor={(item) => item.id} keyboardShouldPersistTaps="handled" />
            </View>
          )}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {},
  searchContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    flexDirection: "row",
  },
  dropdown: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 0,
    borderColor: "#ccc",
    borderWidth: 1,
    zIndex: 999,
    paddingHorizontal: theme.spacing.medium,
  },
  reviewContainer: {
    borderWidth: 1,
    borderColor: "#1e1e1e",
    padding: theme.spacing.small,
    borderRadius: 8,
    marginLeft: theme.spacing.small,
  },
});

export default SearchBarWithDropdown;
