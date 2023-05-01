
package com.testpyramid.airport;

import com.testpyramid.airport.annotations.FlightNumber;
import com.testpyramid.airport.producers.FlightProducer;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.BeforeClass;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import javax.inject.Inject;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(Arquillian.class)
public class FlightWithPassengersTest {
    @Deployment
    public static JavaArchive createDeployment() {
        return ShrinkWrap.create(JavaArchive.class)
                .addClasses(Passenger.class, Flight.class, FlightProducer.class)
                .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
    }

    @Inject
    @FlightNumber(number= "AA1234")
    Flight flight;

    @Mock
    DistancesManager distancesManager;

    @Rule
    public MockitoRule mockitoRule = MockitoJUnit.rule();

    private static Map<Passenger, Integer> passengersPointsMap = new HashMap<>();

    @BeforeClass
    public static void setUp() {
        passengersPointsMap.put(new Passenger("900-45-6809", "Susan Todd", "GB"), 210);
        passengersPointsMap.put(new Passenger("900-45-6797", "Harry Christensen", "GB"), 420);
        passengersPointsMap.put(new Passenger("123-45-6799", "Bethany King", "US"), 630);
    }

    @Test(expected = RuntimeException.class)
    public void testNumberOfSeatsCannotBeExceeded() throws IOException {
        assertEquals(50, flight.getPassengersNumber());
        flight.addPassenger(new Passenger("124-56-7890", "Michael Johnson", "US"));
    }

    @Test
    public void testAddRemovePassengers() throws IOException {
        flight.setSeats(51);
        Passenger additionalPassenger = new Passenger("124-56-7890", "Michael Johnson", "US");
        flight.addPassenger(additionalPassenger);
        assertEquals(51, flight.getPassengersNumber());
        flight.removePassenger(additionalPassenger);
        assertEquals(50, flight.getPassengersNumber());
        assertEquals(51, flight.getSeats());
    }

    @Test
    public void testFlightsDistances() {
        when(distancesManager.getPassengersPointsMap()).thenReturn(passengersPointsMap);

        assertEquals(210, distancesManager.getPassengersPointsMap().get(new Passenger("900-45-6809", "Susan Todd", "GB")).longValue());
        assertEquals(420, distancesManager.getPassengersPointsMap().get(new Passenger("900-45-6797", "Harry Christensen", "GB")).longValue());
        assertEquals(630, distancesManager.getPassengersPointsMap().get(new Passenger("123-45-6799", "Bethany King", "US")).longValue());
    }
}
