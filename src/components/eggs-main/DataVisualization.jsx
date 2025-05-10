import React from "react";
import LineChart from "./charts/line.jsx";
import MultiLineChart from "./charts/multiLine.jsx";
import StackedBarChart from "./charts/stackedBar.jsx";
import DivergingStackedBarChart from "./charts/divergingStackedBar.jsx";
import TransitionButtons from "./transitionButtons.js";
import Mindmap from "./charts/mindmap.jsx";
import styles from "./DataVisualization.module.css";

export default function DataVisualization() {
  const groceryPrices = [
    { filepath: "/data/Eggs/Eggs, grade A, large, per doz. in NE avg.csv", category: "eggs", monthly: true },
    { filepath: "/data/Bread/Bread, white, pan, per lb. (453.6 gm) in NE avg..csv", category: "bread", monthly: true },
    { filepath: "/data/Milk/Milk, fresh, whole, per gal. in NE avg..csv", category: "milk", monthly: true },
    { filepath: "/data/Potato Chips/Potato chips, per 16 oz. in NE avg..csv", category: "potato chips", monthly: true },
  ];
  const productRatio = [
    { label: "Eggs", filepath: "/data/Eggs/Egg Ratio.csv", subtitle: "Grade A Large eggs, per egg." },
    { label: "Bread", filepath: "/data/Bread/Bread Ratio.csv", subtitle: "White pan bread, per lb." },
    { label: "Milk", filepath: "/data/Milk/Milk Ratio.csv", subtitle: "Fresh whole milk, per gal." },
    { label: "Potato Chips", filepath: "/data/Potato Chips/Potato Chip Ratio.csv", subtitle: "Potato chips, per 16 oz." },
  ];
  const spendDistribution = [
    { label: "2020", filepath: "/data/Spending Distribution/2020.csv", subtitle: "How the avg. American consumer spent their money in 2020." },
    { label: "2021", filepath: "/data/Spending Distribution/2021.csv", subtitle: "How the avg. American consumer spent their money in 2021." },
    { label: "2022", filepath: "/data/Spending Distribution/2022.csv", subtitle: "How the avg. American consumer spent their money in 2022." },
    { label: "2023", filepath: "/data/Spending Distribution/2023.csv", subtitle: "How the avg. American consumer spent their money in 2023." },
  ];

  return (
    <div className={`App min-h-screen flex flex-col text-center ${styles.App}`}>
      <main className="container mx-auto px-6 flex-grow">
        <h1 className="text-3xl mb-8 text-center font-bold">Why is food so expensive nowadays?</h1>
        <div className={styles["section-box"] + " section-box mb-8"}>
          <MultiLineChart
            csvFiles={groceryPrices}
            title={<span className={styles["chart-title"]}>Average Prices of Grocery Items</span>}
            subtitle={<span className={styles["chart-subtitle"]}>For Northeast America</span>}
          />
          <p>How often have you gone to a store like Costco or Walmart and walked out feeling like
            you paid way too much for the amount you bought?</p>
          <p>To take a closer look at this problem, I've pulled data from the U.S. Bureau of Labor Statistics
            and examined the prices of some key grocery items:</p>
          <ul>
            <li>Eggs</li>
            <li>Bread</li>
            <li>Milk</li>
            <li>Potato Chips</li>
          </ul>
          <p>The data shows a definite rise in the price of goods. It is an undeniable fact
            that groceries are becoming more expensive — but is this something we should
            actually be worrying about?</p>
        </div>
        <div className={styles["section-box"] + " section-box mb-8"}>
          <LineChart
            filepath={'/data/NJ Hourly Minimum Wage.csv'}
            title={<span className={styles["chart-title"]}>NJ Hourly Minimum Wage.</span>}
            subtitle={""}
          />
          <p>If we take a close look at minimum wage — specifically in NJ — the amount
            we are able to earn as workers has been increasing over the years. However, an increase in both
            minimum wage and food products doesn't mean anything if the prices of foods are
            increasing at a quicker rate.</p>
        </div>
        <div className={styles["section-box"] + " section-box mb-8"}>
          <TransitionButtons
            type = {"line"}
            buttons = {productRatio.map(b => ({...b, title: <span className={styles["chart-title"]}>What an Hour of Work Affords</span>}))}
            monthly = {false}
            title = {<span className={styles["chart-title"]}>What an Hour of Work Affords</span>}
          />
          <p>By taking the ratio of minimum wage to the prices of groceries,
            I can calculate how many groceries we can buy with one hour of work.</p>
          <p>Essentially, if a dozen eggs costs 0.916 USD in 1980, and minimum wage is also 3.10 USD in 1980,
            this means that for 3.10 USD, you can buy about 40 eggs.
          </p>
          <p>Looking at this chart, it is clear that the amount we are able to afford has actually been increasing
            over the years. The root of the problem may not be the prices of groceries. Where does the problem truly lie, then?
          </p>
        </div>
        <div className={styles["section-box"] + " section-box mb-8"}>
          <TransitionButtons
            type = {"bar"}
            buttons = {spendDistribution.map(b => ({...b, title: <span className={styles["chart-title"]}>Spending Distribution</span>}))}
            monthly = {false}
            title = {<span className={styles["chart-title"]}>Spending Distribution</span>}
          />
          <p>I decided to look at whether or not we've been buying more or less food. This information from
            the U.S. Bureau of Labor Statistics tracks how the average American consumer spends their money throughout the year.
          </p>
          <p>If we compare our spending habits from 2020 to 2023, we can see that the percent of money we spend on food
            has <em>increased</em> from 11.9% to 12.9%.</p>
          <p>According to our previous charts, we should be able to afford more food. However, this data only applies to money
            spent on <em>groceries</em>.
          </p>
        </div>
        <div className={styles["section-box"] + " section-box mb-8"}>
          <StackedBarChart
            filepath={'/data/Allocation of money spent on food.csv'}
            title={<span className={styles["chart-title"]}>Food Spending Distribution</span>}
            subtitle={""}
          /> 
          <p>We can divide how we spend our money on food into two categories. According to the U.S. Bureau of Labor Statistics, the two
            categories encompass the following:</p>
          <ul>
            <li>Food at home</li>
              <ul>
              <li>Grocery stores</li>
              <li>Farmer markets</li>
              </ul>
            <li>Food away from home</li>
              <ul>
              <li>Restaurants (fast food & full service)</li>
              <li>Food trucks</li>
              <li>Employer/school cafeterias</li>
              <li>Vending machines</li>
              </ul>
          </ul>
          <p>There is a noticeable shift during 2020 — the beginning of the COVID-19 pandemic.
            We've spent more of our earnings buying groceries and eating at home. However, after 2020,
            we began returning to spending money on food away from home.
          </p>
        </div>
        <div className={styles["section-box"] + " section-box mb-8"}>
          <StackedBarChart
            filepath={'/data/Online food delivery market revenue, 2017 - 2029.csv'}
            title={<span className={styles["chart-title"]}>Online Food Delivery Market Revenue</span>}
            subtitle={""}
            unit={" bn"}
          />
          <p>COVID-19 has changed many industries. The market revenue for food delivery services began to skyrocket
            after the pandemic. Grocery stores began introducing personal shoppers who would pick out your groceries for you.
            Restaurants utilized platforms such as UberEats and DoorDash to fulfill orders during a time where people were reluctant to go out.
          </p>
          <p>However, we live in the ultimate age of convenience. We like using things that are easy. After the pandemic, we've
            continued to order-out and have our food delivered to us.
          </p>
        </div>
        <div className={styles["section-box"] + " section-box mb-8"}>
          <DivergingStackedBarChart
            filepath={"/data/Restaurant unit economics.csv"}
            title={<span className={styles["chart-title"]}>Restaurant unit economics</span>}
            subtitle={""}
          />
          <p>This chart from McKinsey & Company shows what a typical restaurant earns when
            you order through a food delivery service. Let's break it down.</p>
          <p>Original payment is how much the customer initially paid for their order. Note the bar in red — Contribution Margins.</p>
          <p>In delivery fees, we split the costs into what a restaurant must pay the delivery service. The gross margin
            is what is left over after fees are deducted. After that, the gross margin is used to pay a restaurant's operating costs.
          </p>
          <p>The restaurant must use the gross margin to pay for:</p>
          <ul>
            <li>The cost of goods sold</li>
            <li>The labor that went into making said goods</li>
            <li>The occupancy used to create said goods</li>
          </ul>
          <p>Unfortunately, occupancy actually exceeds the gross margins — leading to a negative contribution margin. After fulfilling a customer's 
          order, restaurants <em>lose</em> money.</p>
        </div>
        <div className={styles["section-box"] + " section-box mb-8"}>
          <h2>Conclusion</h2>
          <Mindmap/>
          <p> It is reasonable to conclude that the increased costs for food can be attributed to a continued reliance
            on food-delivery services post-pandemic. Choosing to dine in-person and continuing to cook meals at home
            can help reduce the amount you spend.
          </p>
        </div>
        <div className={styles["section-box"] + " section-box mb-8"}>
          <h2>Sources</h2>
          <ul>
            <li>U.S. Bureau of Labor Statistics</li>
              <ul>
              <li><a href="https://fred.stlouisfed.org/data/STTMINWGNJ"
              target="_blank">
                https://www.bls.gov/opub/reports/consumer-expenditures/2023/</a></li>
              </ul>
            <li>Federal Reserve Bank of St. Louis</li>
              <ul>
              <li><a href="https://fred.stlouisfed.org/data/STTMINWGNJ"
              target="_blank">
                https://fred.stlouisfed.org/data/STTMINWGNJ</a></li>
              </ul>
            <li>Statista</li>
              <ul>
                <li><a href="http://www.statista.com/statistics/891082/online-food-delivery-revenue-by-segment-in-united-states/"
                target="_blank">
                  http://www.statista.com/statistics/891082/online-food-delivery-revenue-by-segment-in-united-states/</a></li>
                <li><a href="http://www.statista.com/statistics/891082/online-food-delivery-revenue-by-segment-in-united-states/"
                target="_blank">
                  http://www.statista.com/statistics/1235724/market-share-us-food-delivery-companies/</a></li>
              </ul>
            <li>McKinsey & Company</li>
              <ul>
                <li><a href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/ordering-in-the-rapid-evolution-of-food-delivery"
                target="_blank">
                  https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/ordering-in-the-rapid-evolution-of-food-delivery</a></li>
              </ul>
          </ul>
        </div>
        <br />
      </main>
    </div>
  );
}
