# Cryptocensus

Cryptocensus is a demo web component built with node.js.  It displays the changes in rates for various cryptocoins such as Bitcoin, Ethereum etc and displays market value in many different currencies .

## About

This web component works based on open-source api's provided by **Coingecko** and **Coinlayer**. It gets the real time data from these api's and displays it to the user as per user's query.


## Usage

1. Install the package to your project using the following command

~~~~ {.html}
npm install cryptocensus
~~~~

1. Import the package in your project

~~~~ {.html}
import crypto from 'cryptocensus';
~~~~

* `crypto.getcoinprice("ETH")` is the function to get any coin value, example mentioned here is **Ethereum(ETH)**.

* `crypto.coinprice("ethereum","USD")` is the function to get any coin value in mentioned currency with market value, example mentioned here is **Ethereum(ETH)** in **USD**.

* `crypto.coinlist()` is the function to get the all possible coins provided by the api.

* `crypto.getcoinvalues("usd")` is the function to get any coin value in mentioned currency, example mention is **USD**.

* `crypto.coinhistory("ethereum","10-10-2021")` is the function to get any coin value on a particular date, example mentioned here is **Ethereum(ETH)** and on date **(10-10-2021)**.

* `crypto.coinmarketchart("ethereum","usd","1")` is the function to get market chart of any coin upto any previous number of days, example mentioned here is **Ethereum(ETH)** and number of previous days is **1**.