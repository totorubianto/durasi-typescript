import durasi from "../src/durasi";

describe("durasi", () => {
  test("Angka negatif", () => {
    expect(() => durasi(-1)).toThrow(`Duration can't be negatif number`);
  });
  test("Angka positif", () => {
    expect(() => durasi(1)).not.toThrow(`Duration can't be negatif number`);
  });
});

describe("Detik", () => {
  test("Durasi Detik", () => {
    expect(durasi(1)).toBe("1 Detik");
  });
  test("Durasi Detik", () => {
    expect(durasi(59)).toBe("59 Detik");
  });
});

describe("Sekarang", () => {
  test("Sekarang positif", () => {
    expect(durasi(0)).toBe("Sekarang");
  });
  test("Sekarang negatif", () => {
    expect(durasi(-0)).toBe("Sekarang");
  });
});

describe("Menit", () => {
  test("Pas", () => {
    expect(durasi(60)).toBe("1 Menit");
  });
  test("Pas 2 Menit", () => {
    expect(durasi(120)).toBe("2 Menit");
  });
  test("Lebih Detik", () => {
    expect(durasi(61)).toBe("1 Menit dan 1 Detik");
  });
});

describe("Jam", () => {
  test("Pas", () => {
    expect(durasi(3600)).toBe("1 Jam");
  });
  test("Pas 3 Jam", () => {
    expect(durasi(3600 * 3)).toBe("3 Jam");
  });
  test("Lebih Menit", () => {
    expect(durasi(3660)).toBe("1 Jam dan 1 Menit");
  });
  test("Lebih Detik", () => {
    expect(durasi(3601)).toBe("1 Jam dan 1 Detik");
  });
  test("Lebih Menit dan Detik", () => {
    expect(durasi(3661)).toBe("1 Jam, 1 Menit dan 1 Detik");
  });
});

describe("Hari", () => {
  test("Pas", () => {
    expect(durasi(86400)).toBe("1 Hari");
  });
  test("Lebih Jam", () => {
    expect(durasi(90000)).toBe("1 Hari dan 1 Jam");
  });
  test("Lebih Menit", () => {
    expect(durasi(86460)).toBe("1 Hari dan 1 Menit");
  });
  test("Lebih Detik", () => {
    expect(durasi(86401)).toBe("1 Hari dan 1 Detik");
  });
  test("Lebih Jam, Menit dan Detik", () => {
    expect(durasi(90061)).toBe("1 Hari, 1 Jam, 1 Menit dan 1 Detik");
  });
});

describe("Tahun", () => {
  test("Pas", () => {
    expect(durasi(31536000)).toBe("1 Tahun");
  });
  test("Lebih Hari", () => {
    expect(durasi(31622400)).toBe("1 Tahun dan 1 Hari");
  });
  test("Lebih Jam", () => {
    expect(durasi(31539600)).toBe("1 Tahun dan 1 Jam");
  });
  test("Lebih Menit", () => {
    expect(durasi(31536060)).toBe("1 Tahun dan 1 Menit");
  });
  test("Lebih Detik", () => {
    expect(durasi(31536001)).toBe("1 Tahun dan 1 Detik");
  });
  test("Lebih Hari, Jam, Menit dan Detik", () => {
    expect(durasi(31626061)).toBe(
      "1 Tahun, 1 Hari, 1 Jam, 1 Menit dan 1 Detik"
    );
  });
});
