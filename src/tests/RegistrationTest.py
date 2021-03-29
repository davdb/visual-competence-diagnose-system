import unittest
import warnings
import time
import random
from selenium import webdriver
from selenium.webdriver.common.by import By


class Registration(unittest.TestCase):

    def setUp(self):
        warnings.filterwarnings("ignore", category=DeprecationWarning)
        options = webdriver.ChromeOptions()
        options.binary_location = "/Applications/Google Chrome 2.app/Contents/MacOS/Google Chrome"
        chrome_driver_binary = "/usr/local/bin/chromedriver"
        self.driver = webdriver.Chrome(
            chrome_driver_binary, chrome_options=options)
        self.driver.set_page_load_timeout(50)

    def test(self):
        driver = self.driver
        driver.implicitly_wait(20)
        driver.get("http://localhost:8080/sign-up")

        email = driver.find_element(By.NAME, "email")
        email_str = (('%06x' % random.randrange(16**6)).upper() +
                     '@gmail.com')
        email.send_keys(email_str)

        age = driver.find_element(By.NAME, "age")
        age.send_keys(21)

        password = driver.find_element(By.NAME, "password")
        password.send_keys("xdxd123")

        password2 = driver.find_element(By.NAME, "password2")
        password2.send_keys("xdxd123")

        submit_button = driver.find_element(By.TAG_NAME, "button")
        submit_button.click()

        time.sleep(5)

        driver.get("http://localhost:8080/sign-in")
        email = driver.find_element(By.NAME, "email")
        email.send_keys(email_str)

        password = driver.find_element(By.NAME, "password")
        password.send_keys("xdxd123")

        submit_button = driver.find_element(By.TAG_NAME, "button")
        submit_button.click()

        time.sleep(3)

        assert driver.current_url == "http://localhost:8080/dashboard"

    def tearDown(self):
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()
