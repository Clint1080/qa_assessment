import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

describe('Tic Tac Toe tests for days', () => {

    test('I can start a game', async () => {
        
        let button = await (await driver).findElement(By.id('start-game'));
        await button.click();
        await driver.sleep(1000)
        
    });

    test('Clicking the upper left square adds an X to the square', async () => {

        let clickSquare0 = await (await driver).findElement(By.id('cell-0'));
        await clickSquare0.click();
        let clickSquare0Value = await (await driver).findElement(By.id('cell-0')).getAttribute('innerText')
        expect(clickSquare0Value).toBe('X')
        await driver.sleep(1000);

    })

     test('Clicking the upper right square adds an X to the square', async () => {

        let clickSquare2 = await (await driver).findElement(By.id('cell-2'));
        await clickSquare2.click();
        let clickSquare2Value = await (await driver).findElement(By.id('cell-2')).getAttribute('innerText');
        expect(clickSquare2Value).toBe('X')
        await driver.sleep(1000);

    })
    
})