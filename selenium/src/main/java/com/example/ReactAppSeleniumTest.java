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
    private By selectRaceBy = By.id("demo-simple-select");
    private By firstHorseNameBy = By.xpath("(//p[contains(@class, 'MuiTypography-body1')])[1]");
    private By firstHorseOddsBy = By.xpath("(//p[contains(@class, 'MuiTypography-body2')])[1]");
    private By firstHorseProfitBy = By.xpath("//*[@id='root']/div/div[1]/div/div[2]/div[1]/div/div[9]/p[2]");
    private By firstHorseStakeButtonOneBy = By.xpath("//button[text()='1']");
    private By firstHorseStakeButtonFiveBy = By.xpath("//button[text()='5']");
    private By firstHorseStakeBackAmountBy = By.xpath("(//input[@id=':r5:'])[1]");
    private By firstHorseBackButtonBy = By.xpath("(//button[text()='Back'])[1]");
    // private By secondHorseStakeButton5By = By.xpath("(//button[text()='5'])[2]");
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
        WebElement firstHorseTextElement = driver.findElement(firstHorseNameBy);
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
        WebElement secondParaElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseNameBy));
        String actualParagraphText = secondParaElement.getText();
        String expectedParagraphText = "Horse 11";
        Assert.assertEquals(actualParagraphText, expectedParagraphText, "Paragraph text mismatch");
        dropdownElement.click();
        optionElement = driver.findElement(By.xpath("//li[text()='Race 1']"));
        optionElement.click();
        secondParaElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseNameBy));
        actualParagraphText = secondParaElement.getText();
        expectedParagraphText = "Horse 1";
        Assert.assertEquals(actualParagraphText, expectedParagraphText, "Paragraph text mismatch");
    }

    @Test
    public void testFirstHorseButtonFive() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement firstHorseStakeBackElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseStakeBackAmountBy));
        String initialStakeValue = firstHorseStakeBackElement.getAttribute("value");
        Assert.assertEquals(initialStakeValue, "0", "Values mismatch");

        WebElement firstHorsButtonFiveElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseStakeButtonFiveBy));
        firstHorsButtonFiveElement.click();

        WebElement firstHorseUpdatedStakeBetElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseStakeBackAmountBy));
        String updatedStakeValue = firstHorseUpdatedStakeBetElement.getAttribute("value");
        Assert.assertEquals(updatedStakeValue, "5", "Values mismatch");

        firstHorseStakeBackElement.sendKeys(Keys.BACK_SPACE);
        
        WebElement firstHorseClearedStakeBetElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseStakeBackAmountBy));
        String clearedStakeValue = firstHorseClearedStakeBetElement.getAttribute("value");
        Assert.assertEquals(clearedStakeValue, "0", "Values mismatch");
    }
    
    // @Test
    // public void testFirstHorseProfit() {
    //     WebDriverWait wait = new WebDriverWait(driver, 10);        
    //     WebElement firstHorseProfitElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseProfitBy));
    //     String firstHorseProfitText = firstHorseProfitElement.getText();
    //     Assert.assertEquals(firstHorseProfitText, "0.00", "Values mismatch");
    // }

    @Test
    public void testFirstHorseButtonOneChangeProfit() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        
        WebElement firstHorseStakeBackElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseStakeBackAmountBy));
        String initialStakeValue = firstHorseStakeBackElement.getAttribute("value");
        Assert.assertEquals(initialStakeValue, "0", "Values mismatch");
        
        WebElement firstHorseOddsTextElement = driver.findElement(firstHorseOddsBy);
        String firstHorseOddsText = firstHorseOddsTextElement.getText();
        
        WebElement initialFirstHorseProfitTextElement = driver.findElement(firstHorseProfitBy);
        String initialFirstHorseProfitText = initialFirstHorseProfitTextElement.getText();
        Assert.assertEquals(initialFirstHorseProfitText, "0.00", "Values mismatch");      

        WebElement firstHorsButtonOneElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseStakeButtonOneBy));
        firstHorsButtonOneElement.click();
    
        WebElement firstHorseBackButtonElement = wait.until(ExpectedConditions.visibilityOfElementLocated(firstHorseBackButtonBy));
        firstHorseBackButtonElement.click();

        WebElement updatedFirstHorseProfitElement = driver.findElement(firstHorseProfitBy);
        String updatedFirstHorseProfitText = updatedFirstHorseProfitElement.getText();
        Assert.assertEquals(updatedFirstHorseProfitText, firstHorseOddsText, "Values mismatch");

        firstHorseStakeBackElement.sendKeys(Keys.BACK_SPACE);
        firstHorseBackButtonElement.click();
        
        WebElement clearedFirstHorseProfitElement = driver.findElement(firstHorseProfitBy);
        String clearedFirstHorseProfitText = clearedFirstHorseProfitElement.getText();
        Assert.assertEquals(clearedFirstHorseProfitText, "0.00", "Values mismatch");
    }
    
    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
