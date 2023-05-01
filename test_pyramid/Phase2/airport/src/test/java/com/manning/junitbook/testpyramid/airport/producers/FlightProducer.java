
package com.testpyramid.airport.producers;


import com.testpyramid.airport.Flight;
import com.testpyramid.airport.FlightBuilderUtil;

import javax.enterprise.inject.Produces;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FlightProducer {

    @Produces
    public Flight createFlight() throws IOException {
        return FlightBuilderUtil.buildFlightFromCsv();
    }
}
