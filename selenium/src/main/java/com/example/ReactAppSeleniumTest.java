package com.example;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class ReactAppSeleniumTest {
    private WebDriver driver;
    private By firstHorseBy = By.xpath("(//p[contains(@class, 'MuiTypography-body1')])[1]");
    private By selectRaceBy = By.id("demo-simple-select");
    private By firstHorseStakeBetAmountBy = By.xpath("(//input[@id=':r5:'])[1]");
    // private By firstHorseStakeButton5By = By.xpath("");
    // private By firstMatchCheckBoxBy = By.xpath("(//input[@id='box'])[1]");

    @BeforeClass
    public void setUp() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        driver = new ChromeDriver(options);
        driver.get("http://localhost:3000");
    }

    @Test
    public void testTitle() {
        String actualTitle = driver.getTitle();
        String expectedTitle = "Horse Profit";
        Assert.assertEquals(actualTitle, expectedTitle, "Title mismatch");
    }

    @Test
    public void testSelectRaceText() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement dropdownElement = wait.until(ExpectedConditions.visibilityOfElementLocated(selectRaceBy));
        String actualDrodownText = dropdownElement.getText();
        String expectedDropdownText = "Race 1";
        Assert.assertEquals(actualDrodownText, expectedDropdownText, "Dropdown text mismatch");
    }

    @Test
    public void testFirstHorseText() {
        WebElement firstHorseTextElement = driver.findElement(firstHorseBy);
        String actualFirstHorseText = firstHorseTextElement.getText();
        String expectedFirstHorseText = "Horse 1";
        Assert.assertEquals(actualFirstHorseText, expectedFirstHorseText, "Paragraph text mismatch");
    }
    
    @Test
    public void testRaceSelect() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement dropdownElement = wait.until(ExpectedConditions.visibilityOfElementLocated(selectRaceBy));
        dropdownElement.click();
        WebElement optionElement = driver.findElement(By.xpath("//li[text()='Race 2']"));
        optionElement.click();
        WebElement secondParaElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseBy));
        String actualParagraphText = secondParaElement.getText();
        String expectedParagraphText = "Horse 11";
        Assert.assertEquals(actualParagraphText, expectedParagraphText, "Paragraph text mismatch");
        dropdownElement.click();
        optionElement = driver.findElement(By.xpath("//li[text()='Race 1']"));
        optionElement.click();
        secondParaElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseBy));
        actualParagraphText = secondParaElement.getText();
        expectedParagraphText = "Horse 1";
        Assert.assertEquals(actualParagraphText, expectedParagraphText, "Paragraph text mismatch");
    }

    @Test
    public void testFirstHorseStakeBetValue() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement firstHorseStakeBetElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseStakeBetAmountBy));
        String stakeValue = firstHorseStakeBetElement.getAttribute("value");
        Assert.assertEquals(stakeValue, "0", "Values mismatch");
    }

    // @Test
    // public void testFirstHorseButton5() {
    //     WebDriverWait wait = new WebDriverWait(driver, 10);
    //     WebElement firstHorseStakeBetElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseStakeBetAmountBy));
    //     String initialStakeValue = firstHorseStakeBetElement.getAttribute("value");
    //     Assert.assertEquals(initialStakeValue, "0", "Values mismatch");

    //     WebElement firstHorsButton5Element = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseStakeButton5By));
    //     firstHorsButton5Element.click();

    //     WebElement firstHorseUpdatedStakeBetElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseStakeBetAmountBy));
    //     String updatedStakeValue = firstHorseUpdatedStakeBetElement.getAttribute("value");
    //     Assert.assertEquals(updatedStakeValue, "5", "Values mismatch");
    // }
    
    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
