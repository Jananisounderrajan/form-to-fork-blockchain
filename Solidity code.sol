// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Food Traceability System
/// @notice Tracks agricultural products from farm to fork with token rewards for farmers
contract FoodTraceability {

    // ----------------------------
    // Structs
    // ----------------------------
    struct Product {
        uint id;
        string name;
        string origin;
        string processDate;
        string harvestDate;
        address farmer;
    }

    struct Farmer {
        address farmerAddress;
        uint tokens;
    }

    // ----------------------------
    // State Variables
    // ----------------------------
    mapping(uint => Product) public products;
    mapping(address => Farmer) public farmers;
    uint public productCount = 0;

    // ----------------------------
    // Events
    // ----------------------------
    event ProductRegistered(uint indexed id, string name, address indexed farmer);
    event TokensAwarded(address indexed farmer, uint tokens);

    // ----------------------------
    // Functions
    // ----------------------------

    /// @notice Register a new product and reward the farmer with tokens
    /// @param _name Product name
    /// @param _origin Product origin (farm location)
    /// @param _processDate Processing date
    /// @param _harvestDate Harvest date
    function registerProduct(
        string memory _name,
        string memory _origin,
        string memory _processDate,
        string memory _harvestDate
    ) public {
        productCount++;

        products[productCount] = Product(
            productCount,
            _name,
            _origin,
            _processDate,
            _harvestDate,
            msg.sender
        );

        // Reward the farmer with tokens
        farmers[msg.sender].farmerAddress = msg.sender;
        farmers[msg.sender].tokens += 10;

        emit ProductRegistered(productCount, _name, msg.sender);
        emit TokensAwarded(msg.sender, 10);
    }

    /// @notice Retrieve details of a product
    /// @param _id Product ID
    /// @return id Product ID
    /// @return name Product name
    /// @return origin Product origin
    /// @return processDate Processing date
    /// @return harvestDate Harvest date
    /// @return farmer Farmer's wallet address
    function getProduct(uint _id)
        public
        view
        returns (
            uint id,
            string memory name,
            string memory origin,
            string memory processDate,
            string memory harvestDate,
            address farmer
        )
    {
        Product memory p = products[_id];
        return (p.id, p.name, p.origin, p.processDate, p.harvestDate, p.farmer);
    }

    /// @notice Get token balance of a farmer
    /// @param _farmer Farmer's wallet address
    /// @return Token balance
    function getFarmerTokens(address _farmer) public view returns (uint) {
        return farmers[_farmer].tokens;
    }
}
