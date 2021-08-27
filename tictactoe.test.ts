import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

// Added all of the driver.sleep(1000) to intentially slow it down so I could watch the computer bow to my will!!!!!!

describe('Tic Tac Toe tests for days', () => {
    // All tests in this block depend on the start button being clicked
    test('I can start a game', async () => {
        
        let button = await (await driver).findElement(By.id('start-game'));
        await button.click();
        await driver.sleep(1000)
        
    });

    test('Clicking the upper left square adds an X to the square', async () => {
        // Selecting the square we want to fill 
        let clickSquare0 = await (await driver).findElement(By.id('cell-0'));

        //clicking that square
        await clickSquare0.click();

        // Now that we have clicked we need to get that squares value
        let clickSquare0Value = await (await driver).findElement(By.id('cell-0')).getAttribute('innerText')

        // What do we expect the value of the cell to be 
        expect(clickSquare0Value).toBe('X')

        // I wanted it to go a little slower so I can watch and enjoy 
        await driver.sleep(1000);

    })

    test('Clicking the upper right square adds an X to the square', async () => {

        let clickSquare2 = await (await driver).findElement(By.id('cell-2'));
        await clickSquare2.click();
        let clickSquare2Value = await (await driver).findElement(By.id('cell-2')).getAttribute('innerText');
        expect(clickSquare2Value).toBe('X')
        await driver.sleep(1000);

    })
    
    test('Clicking the lower right square adds an X to the square', async () => {

        let clickSquare8 = await (await driver).findElement(By.id('cell-8'));
        await clickSquare8.click();
        let clickSquare8Value = await (await driver).findElement(By.id('cell-8')).getAttribute('innerText');
        expect(clickSquare8Value).toBe('X')
        await driver.sleep(1000);

    })
})