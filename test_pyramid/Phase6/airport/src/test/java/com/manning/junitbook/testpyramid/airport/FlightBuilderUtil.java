
package com.testpyramid.airport;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FlightBuilderUtil {

    public static Flight buildFlightFromCsv(String flightNumber, int seats, String fileName) throws IOException {
        Flight flight = new Flight(flightNumber, seats);
        flight.setOrigin("London");
        flight.setDestination("Bucharest");
        flight.setDistance(2100);

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line = null;
            do {
                line = reader.readLine();
                if (line != null) {
                    String[] passengerString = line.toString().split(";");
                    Passenger passenger = new Passenger(passengerString[0].trim(), passengerString[1].trim(), passengerString[2].trim());
                    if (passengerString.length == 4) {
                        if ("Y".equals(passengerString[3].trim())) {
                            passenger.setVip(true);
                        }
                    }
                    flight.addPassenger(passenger);
                }
            } while (line != null);

        }

        return flight;
    }
}
