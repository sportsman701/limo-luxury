import React from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = address => {
        const event = {
            target: { name: this.props.name, value: address }
        };

        this.props.handleChange(event);
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                this.props.handleAutocompleteSelect({
                    name: this.props.name,
                    coordinates: latLng,
                    address
                });
            })
            .catch(error => console.error("Error", error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.props.value}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading
                }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: `Enter ${this.props.name}`,
                                className: "form-control"
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? "suggestion-item--active"
                                    : "suggestion-item";
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? {
                                          backgroundColor: "#fafafa",
                                          cursor: "pointer"
                                      }
                                    : {
                                          backgroundColor: "#ffffff",
                                          cursor: "pointer"
                                      };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearchInput;
