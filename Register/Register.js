import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { InputSwitch } from "primereact/inputswitch";
import { FileUpload } from "primereact/fileupload";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import classes from "./Register.module.css";
import Auxilary from "../../../hoc/Auxilary/Auxilary";
import "primeflex/primeflex.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked2: true,
      activeIndex: null,
      val3: null,
      val4: null,
      selectedRelation: null,
    };
    this.relations = [
      { name: "Father", code: "FAT" },
      { name: "Mother", code: "MOT" },
      { name: "Daughter", code: "DAU" },
      { name: "Son", code: "SON" },
      { name: "Wife", code: "WIF" },
      { name: "Husband", code: "HUS" },
    ];
    this.onRelationChange = this.onRelationChange.bind(this);
  }

  onRelationChange(e) {
    this.setState({ selectedRelation: e.value });
  }

  onClick(itemIndex) {
    let activeIndex = this.state.activeIndex ? [...this.state.activeIndex] : [];

    if (activeIndex.length === 0) {
      activeIndex.push(itemIndex);
    } else {
      const index = activeIndex.indexOf(itemIndex);
      if (index === -1) {
        activeIndex.push(itemIndex);
      } else {
        activeIndex.splice(index, 1);
      }
    }

    this.setState({ activeIndex });
  }

  render() {
    return (
      <Auxilary>
        <h1
          className='p-text-center'
          style={{ marginTop: "7%", marginBottom: "-8%" }}
        >
          REGISTER USER
        </h1>
        <div className={classes.mainContainer}>
          <div>
            <div className='p-field p-grid'>
              <label
                htmlFor='userID'
                className='p-col-fixed'
                style={{ width: "100px" }}
              >
                User ID*
              </label>
              <div className='p-col'>
                <InputText id='userID' type='text' validateOnly />
              </div>
            </div>
            <div className='p-field p-grid'>
              <label
                htmlFor='sponsorID'
                className='p-col-fixed'
                style={{ width: "100px" }}
              >
                Sponsor ID*
              </label>
              <div className='p-col'>
                <InputText id='sponsorID' type='text' />
              </div>
            </div>
            <div className='p-field p-grid'>
              <label
                htmlFor='name'
                className='p-col-fixed'
                style={{ width: "100px" }}
              >
                Name*
              </label>
              <div className='p-col'>
                <InputText id='name' type='text' style={{ width: "200px" }} />
              </div>
            </div>
            <div className='p-field p-grid'>
              <label
                htmlFor='status'
                className='p-col-fixed'
                style={{ width: "100px" }}
              >
                Status*
              </label>
              <div className='p-col'>
                <InputSwitch
                  checked={this.state.checked2}
                  onChange={(e) => this.setState({ checked2: e.value })}
                />
              </div>
            </div>
          </div>
          <div className={classes.imageUpload}>
            <div className={classes.imgBox}></div>
            <FileUpload
              className={classes.imgButtonUpload}
              mode='basic'
              name='demo[]'
              url='./upload.php'
              accept='image/*'
              maxFileSize={1000000}
              onUpload={this.onBasicUploadAuto}
              auto
              chooseLabel='Browse'
            />
          </div>
        </div>
        <div className={classes.accordionContainer}>
          <div className='p-pt-2 p-pb-4' style={{ marginLeft: "20%" }}>
            <Button
              icon={
                this.state.activeIndex &&
                this.state.activeIndex.some((index) => index === 0)
                  ? "pi pi-minus"
                  : "pi pi-plus"
              }
              label='General Information'
              onClick={() => this.onClick(0)}
              className='p-button-text'
            />
            <Button
              icon={
                this.state.activeIndex &&
                this.state.activeIndex.some((index) => index === 1)
                  ? "pi pi-minus"
                  : "pi pi-plus"
              }
              label='Contact Information'
              onClick={() => this.onClick(1)}
              className='p-button-text p-ml-2'
            />
            <Button
              icon={
                this.state.activeIndex &&
                this.state.activeIndex.some((index) => index === 2)
                  ? "pi pi-minus"
                  : "pi pi-plus"
              }
              label='Bank Information'
              onClick={() => this.onClick(2)}
              className='p-button-text p-ml-2'
            />
            <Button
              icon={
                this.state.activeIndex &&
                this.state.activeIndex.some((index) => index === 3)
                  ? "pi pi-minus"
                  : "pi pi-plus"
              }
              label='Nominee Details'
              onClick={() => this.onClick(3)}
              className='p-button-text p-ml-2'
            />
          </div>

          <Accordion
            multiple
            activeIndex={this.state.activeIndex}
            onTabChange={(e) => this.setState({ activeIndex: e.index })}
          >
            <AccordionTab header='GENERAL INFORMATION'>
              <div className={classes.accordionContent}>
                <div className='p-field p-fluid'>
                  <label htmlFor='fname' className='p-d-block'>
                    Father Name
                  </label>
                  <InputText
                    id='fname'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='dob' className='p-d-block'>
                    Date of Birth
                  </label>
                  <InputMask
                    id='date'
                    mask='99/99/9999'
                    value={this.state.val3}
                    placeholder='99/99/9999'
                    slotChar='dd/mm/yyyy'
                    onChange={(e) => this.setState({ val3: e.value })}
                  ></InputMask>
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='panno' className='p-d-block'>
                    PAN Number*
                  </label>
                  <InputText
                    id='panno'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='planning' className='p-d-block'>
                    Planning
                  </label>
                  <InputText
                    id='planning'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='plotno' className='p-d-block'>
                    Plot Number
                  </label>
                  <InputText
                    id='plotno'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='aadharno' className='p-d-block'>
                    Aadhar Number*
                  </label>
                  <InputText
                    id='aadharno'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='aadharno' className='p-d-block'>
                    Aadhar Upload
                  </label>
                  <FileUpload
                    mode='basic'
                    name='demo[]'
                    url='./upload.php'
                    accept='image/*'
                    maxFileSize={1000000}
                    onUpload={this.onBasicUploadAuto}
                    auto
                    chooseLabel='Browse'
                  />
                </div>
              </div>
            </AccordionTab>
            <AccordionTab header='CONTACT INFORMATION'>
              <div className={classes.accordionContent}>
                <div className='p-field p-fluid'>
                  <label htmlFor='phone' className='p-d-block'>
                    Contact Number*
                  </label>
                  <InputText
                    id='phone'
                    keyfilter='num'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='email' className='p-d-block'>
                    Email Address
                  </label>
                  <InputText
                    id='email'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='address' className='p-d-block'>
                    Address
                  </label>
                  <InputText
                    id='address'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='city' className='p-d-block'>
                    City*
                  </label>
                  <InputText
                    id='city'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
              </div>
            </AccordionTab>
            <AccordionTab header='BANK INFORMATION'>
              <div className={classes.accordionContent}>
                <div className='p-field p-fluid'>
                  <label htmlFor='acholdername' className='p-d-block'>
                    Account Holder Name
                  </label>
                  <InputText
                    id='acholdername'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='acnum' className='p-d-block'>
                    Account Number
                  </label>
                  <InputText
                    id='acnum'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='bank' className='p-d-block'>
                    Bank Name
                  </label>
                  <InputText
                    id='bank'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='branch' className='p-d-block'>
                    Branch Name
                  </label>
                  <InputText
                    id='branch'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='ifsc' className='p-d-block'>
                    IFSC Code
                  </label>
                  <InputText
                    id='ifsc'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
              </div>
            </AccordionTab>
            <AccordionTab header='NOMINEE DETAILS'>
              <div className={classes.accordionContent}>
                <div className='p-field p-fluid'>
                  <label htmlFor='noname' className='p-d-block'>
                    Nominee Name
                  </label>
                  <InputText
                    id='noname'
                    aria-describedby='username1-help'
                    className='p-d-block'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='relation' className='p-d-block'>
                    Nominee Relation
                  </label>
                  <Dropdown
                    value={this.state.selectedRelation}
                    options={this.relations}
                    onChange={this.onRelationChange}
                    optionLabel='name'
                    placeholder='Nominee Relation'
                  />
                </div>
                <div className='p-field p-fluid'>
                  <label htmlFor='nodob' className='p-d-block'>
                    Nominee DOB
                  </label>
                  <InputMask
                    id='nodob'
                    mask='99/99/9999'
                    value={this.state.val4}
                    placeholder='99/99/9999'
                    slotChar='dd/mm/yyyy'
                    onChange={(e) => this.setState({ val4: e.value })}
                  ></InputMask>
                </div>
              </div>
            </AccordionTab>
          </Accordion>
          <div className={classes.registerSubmitButton}>
            <Button label='CREATE USER' className='p-button-lg' />
          </div>
        </div>
      </Auxilary>
    );
  }
}
