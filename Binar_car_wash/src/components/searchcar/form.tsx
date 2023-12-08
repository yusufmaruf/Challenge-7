function FormSearchCar ()  {
    return (
        <div className="container">
        <div className="row">
            <div className="col-10 offset-1 search-panel">
                <form action="/carsfiltered" method="GET">
                    <div className="row">
                        <div className="col-lg">
                            <div className="form-group">
                                <label htmlFor="driver">Tipe Driver</label>
                                <select name="driver" id="driver" className="form-select">
                                    <option value="" disabled selected hidden>Pilih Tipe Driver</option>
                                    <option value="dengan-supir">Dengan Supir</option>
                                    <option value="tanpa-supir">Tanpa Supir</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="form-group">
                                <label htmlFor="tanggal">Tanggal</label>
                                <input type="date" name="date" id="tanggal" className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="form-group">
                                <label htmlFor="jemput">Waktu Jemput/Ambil</label>
                                <input type="time" name="jemput" id="jemput" className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="form-group">
                                <label htmlFor="jmlPenumpang">Jumlah Penumpang</label>
                                <input type="number" name="capacity" id="jmlPenumpang" className="form-control" placeholder="Tentukan kapasitas" />
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="form-group">
                                <button type="submit" className="btn btn-success" id="btn-search">Cari Mobil</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}
export default FormSearchCar;