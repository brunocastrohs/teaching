
package com.testpyramid.airport.producers;

import com.testpyramid.airport.FlightBuilderUtil;
import com.testpyramid.airport.Flight;
import com.testpyramid.airport.annotations.FlightNumber;

import javax.enterprise.inject.Produces;
import java.io.IOException;

public class FlightProducer {

    @Produces
    @FlightNumber(number= "AA1234")
    public Flight createFlight() throws IOException {
        return FlightBuilderUtil.buildFlightFromCsv("AA1234", 50,"src/test/resources/flights_information.csv");
    }
}
