import unittest
import warnings
from selenium import webdriver


class AppTitleTest(unittest.TestCase):

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
        driver.get("http://localhost:8080/")
        assert driver.title == 'System wspomagający diagnozę kompetencji wizualnych'

    def tearDown(self):
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()
