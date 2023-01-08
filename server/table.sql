-- Borza Andrei Gabriel, grupa 30226, semigrupa 1
-- Subiectul 16

-- creare tabele MySQL
CREATE TABLE Persoane (
    idpers int NOT NULL AUTO_INCREMENT,
    nume VARCHAR(255) NOT NULL,
    adresa VARCHAR(255) NOT NULL,
    gen CHAR(1) CHECK (gen IN ('M','F')) NOT NULL,
    data_nasterii DATE NOT NULL,
    PRIMARY KEY(idpers)
);

CREATE TABLE Conturi (
    nrcont int NOT NULL PRIMARY KEY,
    sold DECIMAL(15,2) NOT NULL,
    idpers int,
    FOREIGN KEY (idpers) REFERENCES Persoane(idpers)
);

CREATE TABLE Carduri (
    nrcard int NOT NULL PRIMARY KEY,
    data_de_la DATE NOT NULL,
    data_la DATE NOT NULL,
    limita DECIMAL(15,2),
    nrcont int NOT NULL,
    tip VARCHAR(15) CHECK (tip IN ('VISA', 'MASTERCARD')) NOT NULL,
    categorie VARCHAR(15) CHECK (categorie IN ('DEBIT', 'CREDIT')) NOT NULL,
    FOREIGN KEY (nrcont) REFERENCES Conturi(nrcont)
);

CREATE TABLE Miscari (
    nrcard INT NOT NULL,
    data_ora TIMESTAMP NOT NULL,
    valoare DECIMAL(15,2) NOT NULL,
    scop VARCHAR(255) NOT NULL,
    FOREIGN KEY (nrcard) REFERENCES Carduri(nrcard)
);

-- alters
ALTER TABLE Persoane ADD (
    email VARCHAR(255) NOT NULL
);

alter table conturi add constraint cont_unic UNIQUE(nrcont);

ALTER TABLE Persoane ADD (
    data_curenta DATETIME DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE Persoane
ADD CHECK (
    TIMESTAMPDIFF(YEAR, data_nasterii, data_curenta) >= 18
);

-- b)
ALTER TABLE Miscari ADD CHECK (
    valoare <= 200 OR scop NOT LIKE '%rată'
);

-- INSERARI
-- persoane
INSERT INTO Persoane(nume, adresa, gen, data_nasterii, email) VALUES(
    "Borza Andrei", "Str. Minerului, Bl. 23, Deva", "M", 
    STR_TO_DATE("12-02-2002", '%d-%m-%Y'), "andreiborzagabriel@gmail.com"
);
INSERT INTO Persoane(nume, adresa, gen, data_nasterii, email) VALUES(
    'Bildea Cristian', 'Str. Observatorului, Camin C4, Cluj-Napoca', 'M', 
    STR_TO_DATE('2001-12-29', '%Y-%m-%d'), 'bildea.cristian@gmail.com'
);
INSERT INTO Persoane(nume, adresa, gen, data_nasterii, email) VALUES(
    'Popa Alexandru', 'Str. Plevnei, Cluj-Napoca', 'M', 
    STR_TO_DATE('2002-05-24', '%Y-%m-%d'), 'popa.alexandru@gmail.com'
);
INSERT INTO Persoane(nume, adresa, gen, data_nasterii, email) VALUES(
    'Sirbu Paul', 'Str. Minerului, Deva', 'M', 
    STR_TO_DATE('2003-05-29', '%Y-%m-%d'), 'sirbu.paul@gmail.com'
);
INSERT INTO Persoane(nume, adresa, gen, data_nasterii, email) VALUES(
     'Zaicanu Raluca', 'Str. Minerului,Bl. 23, Deva', 'F', 
    STR_TO_DATE('2002-05-15', '%Y-%m-%d'), 'zaicanu.raluca@gmail.com'
);
INSERT INTO Persoane(nume, adresa, gen, data_nasterii, email) VALUES(
     'Billy Gates', 'Microsoft HQ, California', 'M', 
    STR_TO_DATE('1998-03-17', '%Y-%m-%d'), 'billy.gates@gmail.com'
);

-- conturi
INSERT INTO Conturi(nrcont, sold, idpers) VALUES(
    12022002, 25000, 1
);
INSERT INTO Conturi(nrcont, sold, idpers) VALUES(
    29122001, 1250.34, 2
);
INSERT INTO Conturi(nrcont, sold, idpers) VALUES(
    24052002, 678.98, 3
);
INSERT INTO Conturi(nrcont, sold, idpers) VALUES(
    120220020, 178.98, 1
);
INSERT INTO Conturi(nrcont, sold, idpers) VALUES(
    29052003, 9560.54, 4
);
INSERT INTO Conturi(nrcont, sold, idpers) VALUES(
    15052002, 2300.00, 5
);
INSERT INTO Conturi(nrcont, sold, idpers) VALUES(
    17031998, 1000000000.00, 6
);


-- carduri
INSERT INTO Carduri(nrcard, data_de_la, data_la, limita, nrcont, tip, categorie) VALUES(
    1703, STR_TO_DATE('2013-01-28', '%Y-%m-%d'), STR_TO_DATE('2029-09-12', '%Y-%m-%d'), 
    10000000000, 17031998, 
    'MASTERCARD', 'DEBIT'
);
INSERT INTO Carduri(nrcard, data_de_la, data_la, limita, nrcont, tip, categorie) VALUES(
    102301, STR_TO_DATE('2005-10-15', '%Y-%m-%d'), STR_TO_DATE('2019-10-16', '%Y-%m-%d'), 
    10000, 12022002, 
    'VISA', 'DEBIT'
);
INSERT INTO Carduri(nrcard, data_de_la, data_la, limita, nrcont, tip, categorie) VALUES(
    1202, STR_TO_DATE('2019-10-15', '%Y-%m-%d'), STR_TO_DATE('2025-10-16', '%Y-%m-%d'), 
    2000000, 12022002, 
    'VISA', 'DEBIT'
);
INSERT INTO Carduri(nrcard, data_de_la, data_la, limita, nrcont, tip, categorie) VALUES(
    2912, STR_TO_DATE('2020-09-08', '%Y-%m-%d'), STR_TO_DATE('2027-12-20', '%Y-%m-%d'), 
    2000000, 29122001, 
    'VISA', 'DEBIT'
);
INSERT INTO Carduri(nrcard, data_de_la, data_la, limita, nrcont, tip, categorie) VALUES(
    2405, STR_TO_DATE('2022-05-26', '%Y-%m-%d'), STR_TO_DATE('2029-07-15', '%Y-%m-%d'), 
    2000000, 24052002, 
    'VISA', 'DEBIT'
);
INSERT INTO Carduri(nrcard, data_de_la, data_la, limita, nrcont, tip, categorie) VALUES(
    1203, STR_TO_DATE('2022-09-15', '%Y-%m-%d'), STR_TO_DATE('2030-02-12', '%Y-%m-%d'), 
    2000000, 12022002, 
    'VISA', 'CREDIT'
);
INSERT INTO Carduri(nrcard, data_de_la, data_la, limita, nrcont, tip, categorie) VALUES(
    2913, STR_TO_DATE('2015-01-19', '%Y-%m-%d'), STR_TO_DATE('2022-12-08', '%Y-%m-%d'), 
    150000, 29122001, 
    'MASTERCARD', 'CREDIT'
);
INSERT INTO Carduri(nrcard, data_de_la, data_la, limita, nrcont, tip, categorie) VALUES(
    2406, STR_TO_DATE('2014-02-14', '%Y-%m-%d'), STR_TO_DATE('2022-12-08', '%Y-%m-%d'), 
    130000, 24052002, 
    'MASTERCARD', 'CREDIT'
);
INSERT INTO Carduri(nrcard, data_de_la, data_la, limita, nrcont, tip, categorie) VALUES(
    1204, STR_TO_DATE('2022-12-08', '%Y-%m-%d'), STR_TO_DATE('2025-07-27', '%Y-%m-%d'), 
    30000, 120220021, 
    'MASTERCARD', 'DEBIT'
);
INSERT INTO Carduri(nrcard, data_de_la, data_la, limita, nrcont, tip, categorie) VALUES(
    2905, STR_TO_DATE('2019-12-08', '%Y-%m-%d'), STR_TO_DATE('2028-10-30', '%Y-%m-%d'), 
    40000, 29052003, 
    'VISA', 'CREDIT'
);
INSERT INTO Carduri(nrcard, data_de_la, data_la, limita, nrcont, tip, categorie) VALUES(
   1505, STR_TO_DATE('2020-10-15', '%Y-%m-%d'), STR_TO_DATE('2035-08-05', '%Y-%m-%d'), 
   300000, 15052002,
   'MASTERCARD', 'DEBIT'
);

-- miscari
INSERT INTO Miscari(nrcard, data_ora, valoare, scop) VALUES(
    1202, STR_TO_DATE('2022-12-08 15:20', '%Y-%m-%d %H:%i:%s'), 250, 'Cursuri chitara'
);
INSERT INTO Miscari(nrcard, data_ora, valoare, scop) VALUES(
    1202, STR_TO_DATE('2022-12-08 18:35', '%Y-%m-%d %H:%i:%s'), 1520.15, 'Reparatii masina'
);
INSERT INTO Miscari(nrcard, data_ora, valoare, scop) VALUES(
    2912, STR_TO_DATE('2019-05-19 17:54', '%Y-%m-%d %H:%i:%s'), 515, 'Bicicleta'
);
INSERT INTO Miscari(nrcard, data_ora, valoare, scop) VALUES(
    2405, STR_TO_DATE('2021-11-07 19:48', '%Y-%m-%d %H:%i:%s'), 725, 'Scooter'
);
INSERT INTO Miscari(nrcard, data_ora, valoare, scop) VALUES(
    1505, STR_TO_DATE('2022-01-01 17:25', '%Y-%m-%d %H:%i:%s'), 160, 'Machiaje'
);
INSERT INTO Miscari(nrcard, data_ora, valoare, scop) VALUES(
    1505, STR_TO_DATE('2022-01-01 18:47', '%Y-%m-%d %H:%i:%s'), 225, 'FIFA 23'
);
INSERT INTO Miscari(nrcard, data_ora, valoare, scop) VALUES(
    102301, STR_TO_DATE('2022-01-01 19:12', '%Y-%m-%d %H:%i:%s'), 226, 'FIFA 23'
);
INSERT INTO Miscari(nrcard, data_ora, valoare, scop) VALUES(
    102301, STR_TO_DATE('2022-01-01 18:21', '%Y-%m-%d %H:%i:%s'), 226, 'Bicicleta'
);
INSERT INTO Miscari(nrcard, data_ora, valoare, scop) VALUES(
    102301, STR_TO_DATE('2022-01-01 17:48', '%Y-%m-%d %H:%i:%s'), 583, 'Reparatii masina'
);
INSERT INTO Miscari(nrcard, data_ora, valoare, scop) VALUES(
    1703, STR_TO_DATE('2021-01-01 10:25', '%Y-%m-%d %H:%i:%s'), 250000, 'Lamborghini Aventador'
);
INSERT INTO Miscari(nrcard, data_ora, valoare, scop) VALUES(
    1703, STR_TO_DATE('2022-05-18 21:55', '%Y-%m-%d %H:%i:%s'), 125000, 'Cina'
);
INSERT INTO Miscari(nrcard, data_ora, valoare, scop) VALUES(
    1703, STR_TO_DATE('2018-05-18 18:42', '%Y-%m-%d %H:%i:%s'), 20000, 'Rolex'
);


CREATE TRIGGER update_sold
AFTER INSERT ON Miscari
FOR EACH ROW
BEGIN
    UPDATE Conturi
    SET sold = sold + NEW.valoare
    WHERE nrcont = (SELECT nrcont FROM Carduri WHERE nrcard = NEW.nrcard);
END;


-- 16.3
-- a)
SELECT * FROM Carduri
WHERE categorie = 'DEBIT'
ORDER BY data_de_la DESC;

-- b)
SELECT * FROM Miscari
WHERE valoare BETWEEN 500 AND 1000
ORDER BY scop, valoare DESC;


-- 16.4
-- a)
SELECT p.nume, Carduri.tip, Carduri.categorie, Carduri.data_de_la, Carduri.data_la FROM Persoane p
INNER JOIN Conturi ON p.idpers = Conturi.idpers
INNER JOIN Carduri ON Conturi.nrcont = Carduri.nrcont
WHERE Carduri.tip = 'MASTERCARD';

-- b)
SELECT DISTINCT p.nume, c1.nrcont as cont1, c2.nrcont as cont2
FROM Persoane p
INNER JOIN Conturi c1 ON p.idpers = c1.idpers
INNER JOIN Conturi c2 ON c1.idpers = c2.idpers
INNER JOIN Carduri cd ON c1.nrcont = cd.nrcont OR c2.nrcont = cd.nrcont
WHERE c1.nrcont < c2.nrcont;



-- 16.5
-- a)
SELECT p.idpers, p.nume, cd.nrcard
FROM Persoane p
INNER JOIN Conturi c ON p.idpers = c.idpers
INNER JOIN Carduri cd ON c.nrcont = cd.nrcont
GROUP BY p.idpers
HAVING COUNT(cd.nrcard) = 1;


-- b) 
SELECT * FROM Miscari WHERE scop IN(SELECT scop FROM Miscari
                                    WHERE nrcard = 102301 
                                    AND data_ora BETWEEN '2022-01-01 17:00:00' 
                                    AND '2022-01-01 19:00:00') 
                      AND nrcard <> 102301;


-- 16.6
-- a)
SELECT p.gen, cd.categorie, COUNT(*) AS 'count'
FROM Persoane p
INNER JOIN Conturi c ON p.idpers = c.idpers
INNER JOIN Carduri cd ON c.nrcont = cd.nrcont
GROUP BY p.gen, cd.categorie;

-- b) 
SELECT p.nume, c.nrcont, SUM(m.valoare) AS 'total', 
MIN(m.valoare) as 'min', AVG(m.valoare) as 'avg', MAX(m.valoare) as 'max'
FROM Persoane p
INNER JOIN Conturi c ON p.idpers = c.idpers
INNER JOIN Carduri cd ON c.nrcont = cd.nrcont
INNER JOIN Miscari m ON cd.nrcard = m.nrcard
WHERE YEAR(m.data_ora) BETWEEN 2021 AND 2022 AND YEAR(p.data_nasterii) = 1998
GROUP BY p.idpers, c.nrcont;




--  total cheltuit pt fiecare persoane, toate cardurile!
SELECT p.nume, c.nrcont, SUM(m.valoare) AS 'total'
FROM Persoane p
INNER JOIN Conturi c ON p.idpers = c.idpers
INNER JOIN Carduri cd ON c.nrcont = cd.nrcont
INNER JOIN Miscari m ON cd.nrcard = m.nrcard
GROUP BY p.idpers, c.nrcont;




-- proceduri stocate:
DELIMITER //
CREATE PROCEDURE between_vals(IN lower INT, IN higher INT)
BEGIN
    SELECT * FROM Miscari
    WHERE valoare BETWEEN lower AND higher
    ORDER BY scop, valoare DESC;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE scop_fiveb(IN num INT)
BEGIN
    SELECT * FROM Miscari 
    WHERE scop IN(
        SELECT scop FROM Miscari
        WHERE nrcard = num 
        AND data_ora BETWEEN '2022-01-01 17:00:00' 
        AND '2022-01-01 19:00:00'
        ) 
    AND nrcard <> num;
END //
DELIMITER ; 