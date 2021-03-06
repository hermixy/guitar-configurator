#pragma once
#include <math.h>

#include <QDebug>
#include <QJSValue>
#include <QObject>
#include <QQueue>
#include <QSerialPort>
#include <QSerialPortInfo>
#include <hidapi.h>
#include "submodules/Ardwiino/src/shared/config/config.h"

#include "device.h"
#include "ardwiinolookup.h"
#include "deviceconfiguration.h"
class Ardwiino : public Device {
    Q_OBJECT
    Q_PROPERTY(bool ready READ isReady NOTIFY readyChanged)
    Q_PROPERTY(DeviceConfiguration* config MEMBER m_configuration NOTIFY configurationChanged)
   public:
    explicit Ardwiino(struct hid_device_info *usbDeviceId, UsbDevice_t devt, QObject* parent = nullptr);
    explicit Ardwiino(UsbDevice_t devt, QObject* parent = nullptr);
    QString getDescription();
    bool isReady();
    virtual void close();
    virtual bool open();
    virtual void bootloader();
    virtual bool isConfigurable() {
        return m_configurable;
    }
    board_t board() const {
        return m_board;
    }
    QString boardShortName() const {
        return m_board.shortName;
    }
    QString boardName() const {
        return m_board.name;
    }
    void setBoard(QString boardName, uint freq) {
        m_board = ArdwiinoLookup::getInstance()->findByBoard(boardName);
        if (freq != 0) {
            m_board.cpuFrequency = freq;
        }
    }
    bool isOutdated() const {
        return m_isOutdated;
    }
   public slots:
    void writeConfig();
   signals:
    void readyChanged();
    void ledsChanged();
    void midiChanged();
    void configurationChanged();

   protected:
    QString m_processor;

   private:
    struct hid_device_info *m_usbId;
    hid_device* m_hiddev;
    QByteArray readData(int id);
    void writeData(int cmd, QByteArray data = QByteArray());
    QString m_serialNum;
    DeviceConfiguration* m_configuration;
    bool m_isOutdated;
    bool m_hasPinDetectionCallback;
    bool m_configurable;
    QJSValue m_pinDetectionCallback;
    inline virtual bool isEqual(const Device& other) const {
        return true;
    }
};
