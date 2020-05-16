package com.herokuapp.theinternet.base;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.testng.annotations.DataProvider;

import com.opencsv.CSVReader;

public class CsvDataProviders {

	@DataProvider(name = "csvReader")
	public static Iterator<Object[]> csvReader(Method method) {
		/*
		 * //name of the data provider is same as the method name //the method returns
		 * Iterator<object[]> type and receives method //first step when test started,it
		 * goes to @beforemethod in basetest to start driver //(i,e)
		 * driver=factory.createdriver(); //when driver is started, it goes
		 * to @Test(priotity=1)NegativeLogInTests extends TestUtilities method //now it
		 * knows this method uses dataprovider and it goes to dataprovider to create
		 * data //It already knows test class and test method name,so in dataprovider we
		 * can use this knowledge //String pathname is created to our file,
		 * method.getDeclaringClass().getSimpleName() gets class name ,method.getName()
		 * gets the method name //path will be different for each test and our data provider
		 * will know exactly where to look for data for each test //we will add
		 * dependency for our csv reader to read our file //reader.readnext() will read
		 * first row of data,that is header in our data file with keys //(i,e)for header
		 * called no, keys will be 1,2,3,4,etc //inside our data provider first array of
		 * strings(i,e)String[] keys = reader.readNext() will be the key //no at
		 * position 0,username at position 1,so on //if(Keys!=null), i,e if we have keys
		 * in our data provider,create another array of strings with actually our data
		 * //while we have next line in our data provider,in our data file,while
		 * ((dataParts = reader.readNext()) != null) { //we will read this data file and
		 * put it as the array of string, data parts //data parts will contain array of
		 * strings from each row like 1,incorrectusername,supersecretpassword etc
		 * //testData.put(keys[i], dataParts[i]);,here we will connect each header with
		 * each value //example for  header no the value 1,for header username the value is
		 * incorrectusername depending on what row we are reading //dataprovider will go
		 * through each row , n for each row it will create map. //string ,string then
		 * key value //after reading each row and creating our map,then we are adding
		 * map to our list //list.add(new Object[]) //then we catch exceptions,if we
		 * cannot read thew file, then cannot read path name message //data provider
		 * will return list.iterator //not list with all maps, but each map separatley
		 */		List<Object[]> list = new ArrayList<Object[]>();
		String pathname = "src" + File.separator + "test" + File.separator + "resources" + File.separator
				+ "dataproviders" + File.separator + method.getDeclaringClass().getSimpleName() + File.separator
				+ method.getName() + ".csv";
		File file = new File(pathname);
		try {
			CSVReader reader = new CSVReader(new FileReader(file));
			String[] keys = reader.readNext();
			if (keys != null) {
				String[] dataParts;
				while ((dataParts = reader.readNext()) != null) {
					Map<String, String> testData = new HashMap<String, String>();
					for (int i = 0; i < keys.length; i++) {
						testData.put(keys[i], dataParts[i]);
					}
					list.add(new Object[] { testData });
				}
			}
			reader.close();
		} catch (FileNotFoundException e) {
			throw new RuntimeException("File " + pathname + " was not found.\n" + e.getStackTrace().toString());
		} catch (IOException e) {
			throw new RuntimeException("Could not read " + pathname + " file.\n" + e.getStackTrace().toString());
		}

		return list.iterator();
	}

}