
package com.testpyramid.airport.producers;

import com.testpyramid.airport.FlightBuilderUtil;
import com.testpyramid.airport.annotations.FlightNumber;
import com.testpyramid.airport.Flight;

import javax.enterprise.inject.Produces;
import java.io.IOException;

public class FlightProducer {

    @Produces
    @FlightNumber(number = "AA1234")
    public Flight createFlight() throws IOException {
        return FlightBuilderUtil.buildFlightFromCsv("AA1234", 50, "src/test/resources/flights_information.csv");
    }

    @Produces
    @FlightNumber(number = "AA1235")
    public Flight createFlight2() throws IOException {
        Flight flight = FlightBuilderUtil.buildFlightFromCsv("AA1235", 36, "src/test/resources/flights_information2.csv");
        return flight;
    }

    @Produces
    @FlightNumber(number = "AA1236")
    public Flight createFlight3() throws IOException {
        Flight flight = FlightBuilderUtil.buildFlightFromCsv("AA1236", 24, "src/test/resources/flights_information3.csv");
        return flight;
    }
}
