import unittest
import warnings
from selenium import webdriver
from selenium.webdriver.common.by import By
import time


class PermissionsTest(unittest.TestCase):

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
        driver.get("http://localhost:8080/sign-in")
        email = driver.find_element(By.NAME, "email")
        email.send_keys('testmoderator@gmail.com')

        password = driver.find_element(By.NAME, "password")
        password.send_keys("xdxd123")

        submit_button = driver.find_element(By.TAG_NAME, "button")
        submit_button.click()

        time.sleep(3)

        assert driver.current_url == "http://localhost:8080/dashboard"

        nav = driver.find_element(By.TAG_NAME, "nav")
        li = nav.find_element(By.TAG_NAME, "ul")
        items = li.find_elements(By.TAG_NAME, "li")

        assert len(items) == 3

    def tearDown(self):
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()
